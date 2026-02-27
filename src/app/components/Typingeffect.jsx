import { useState, useEffect } from "react";

function TypingHeading() {
  const fullText = "Engineer Dashboard";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="text-6xl font-bold text-gray-900">
      Interactive{" "}
      <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </h1>
  );
}

export default Typingeffect;