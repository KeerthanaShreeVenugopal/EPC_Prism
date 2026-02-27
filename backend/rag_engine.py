import os
import faiss
import requests
import numpy as np
from sentence_transformers import SentenceTransformer

print("🔥 PRISM ROUTED EPC ENGINE ACTIVE 🔥")

# ==============================
# PATHS
# ==============================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INDEX_DIR = os.path.join(BASE_DIR, "faiss_index")
INDEX_PATH = os.path.join(INDEX_DIR, "index.faiss")
DOCS_PATH = os.path.join(INDEX_DIR, "documents.txt")

# ==============================
# MODEL CONFIG
# ==============================
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3:8b"
EMBED_MODEL = "all-MiniLM-L6-v2"

# ==============================
# SYSTEM PROMPT (DISCIPLINED STRUCTURAL MODE)
# ==============================
SYSTEM_PROMPT = """
You are an EPC pre-construction structural decision engine for low- to mid-rise residential RCC buildings.

Respond strictly in this format:

Topic:
Structural Impact:
Downstream Risk:
Decision Position:
Risk Level:
Confidence:

WRITING RULES:
• Use decisive engineering language.
• Avoid hedging phrases like "may" or "could" unless technically unavoidable.
• No conversational language.
• No execution steps.
• No numerical codes.
• Remain within typical residential RCC systems.
• Base reasoning on cause → effect → downstream impact.

RISK LEVEL GUIDANCE:
• Low = minimal structural or lifecycle impact.
• Medium = manageable risk with proper validation.
• High = significant structural or lifecycle exposure if misjudged.

Be concise, authoritative, and professional.
"""
# ==============================
# LOAD EMBEDDING MODEL
# ==============================
print("Loading embedding model...")
embedder = SentenceTransformer(EMBED_MODEL)

# ==============================
# LOAD FAISS INDEX
# ==============================
print("Loading FAISS index...")
index = faiss.read_index(INDEX_PATH)

# ==============================
# LOAD DOCUMENTS
# ==============================
print("Loading knowledge documents...")
with open(DOCS_PATH, "r", encoding="utf-8") as f:
    documents = f.read().split("<<<END>>>")

documents = [d.strip() for d in documents if d.strip()]
print(f"Loaded {len(documents)} documents")
print("System ready.\n")

# ==============================
# TOPIC ROUTER
# ==============================
def detect_topic(question: str):
    q = question.lower()

    if any(k in q for k in ["slab", "beam", "column", "span", "deflection", "bending"]):
        return "structural_behavior"

    if any(k in q for k in ["soil", "footing", "foundation", "settlement", "bearing"]):
        return "foundation_soil"

    if any(k in q for k in ["cost", "optimize", "value engineering", "reduce cost"]):
        return "value_engineering"

    if any(k in q for k in ["freeze", "delay", "risk", "uncertainty"]):
        return "risk_uncertainty"

    if any(k in q for k in ["crack", "shrinkage", "durability", "joint", "curling"]):
        return "durability_lifecycle"

    if any(k in q for k in ["constructability", "execution difficulty", "complexity"]):
        return "constructability"

    return "general"

# ==============================
# CONTEXT RETRIEVAL
# ==============================
def retrieve_context(query, k=4):
    query_vector = embedder.encode([query])
    distances, indices = index.search(np.array(query_vector), k)

    results = []
    for idx in indices[0]:
        if 0 <= idx < len(documents):
            results.append(documents[idx])

    return "\n\n".join(results)

# ==============================
# QUERY LLM
# ==============================
def query_llm(prompt):
    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": MODEL_NAME,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.05,
                    "num_predict": 260,
                },
            },
            timeout=180,
        )
        return response.json().get("response", "").strip()
    except Exception as e:
        print("LLM error:", e)
        return ""

# ==============================
# MAIN PIPELINE
# ==============================
def run_rag(question: str):

    forbidden_inputs = [
        "how to pour",
        "construction steps",
        "execution method",
        "site procedure",
        "step by step",
    ]

    if any(term in question.lower() for term in forbidden_inputs):
        return (
            "This system supports EPC pre-construction decision reasoning "
            "and does not provide construction execution guidance."
        )

    topic = detect_topic(question)
    print("Detected Topic:", topic)

    context = retrieve_context(question)

    if not context:
        context = "Limited relevant pre-construction context available."

    prompt = f"""{SYSTEM_PROMPT}

CONTEXT:
{context}

QUESTION:
{question}

ANSWER:
"""

    answer = query_llm(prompt)

    if not answer:
        return "The system could not generate a response."

    return answer