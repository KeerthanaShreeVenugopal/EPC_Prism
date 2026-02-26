import os
import faiss
import requests
from sentence_transformers import SentenceTransformer

print("🔥 PRISM RAG ENGINE — BASELINE MODE 🔥")

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
MODEL_NAME = "phi3:mini"
EMBED_MODEL = "all-MiniLM-L6-v2"

# ==============================
# SYSTEM PROMPT (ORIGINAL WORKING VERSION)
# ==============================
SYSTEM_PROMPT = """
You are an EPC pre-construction reasoning assistant for low- to mid-rise residential RCC buildings.

CORE PRINCIPLES:
• Base reasoning on provided context.
• Respond conservatively when context is limited.
• Focus on structural behavior, constructability, durability, lifecycle cost, and risk.

STRICT BOUNDARIES:
• Do NOT invent codes, numbers, or regulations.
• Do NOT provide construction procedures.
• Do NOT introduce complex systems beyond typical residential practice.

REASONING FOCUS:
• Cause → effect → downstream impact.
• Highlight risks and trade-offs.
• Suggest practical mitigation strategies.

RESPONSE STYLE:
• One concise professional paragraph.
• Clear engineering language.
"""

# ==============================
# LOAD MODELS & INDEX
# ==============================
print("Loading embedding model...")
embedder = SentenceTransformer(EMBED_MODEL)

print("Loading FAISS index...")
index = faiss.read_index(INDEX_PATH)

print("Loading knowledge documents...")
with open(DOCS_PATH, "r", encoding="utf-8") as f:
    documents = f.read().split("<<<END>>>")

documents = [d.strip() for d in documents if d.strip()]
print(f"Loaded {len(documents)} documents")
print("System ready.\n")

# ==============================
# RETRIEVE CONTEXT
# ==============================
def retrieve_context(query, k=4):
    query_vector = embedder.encode([query])
    distances, indices = index.search(query_vector, k)

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
                    "temperature": 0.15,
                    "num_predict": 180,
                },
            },
            timeout=180,
        )
        return response.json().get("response", "").strip()
    except Exception as e:
        print("LLM error:", e)
        return ""

# ==============================
# MAIN RAG PIPELINE
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

    context = retrieve_context(question)

    if not context:
        context = "Limited pre-construction context available. Provide a cautious engineering assessment."

    prompt = f"""{SYSTEM_PROMPT}

CONTEXT:
{context}

QUESTION:
{question}

ANSWER:"""

    answer = query_llm(prompt)

    if not answer:
        return "The system could not generate a response."

    forbidden_terms = [
        "permit",
        "regulation",
        "legal requirement",
        "compliance",
        "building code",
    ]

    if any(term in answer.lower() for term in forbidden_terms):
        return (
            "This system provides pre-construction decision insights "
            "and does not address regulatory compliance."
        )

    return answer