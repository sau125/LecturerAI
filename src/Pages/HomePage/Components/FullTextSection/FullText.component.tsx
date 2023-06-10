import { FC, useEffect, useState } from "react";

interface FullTextProps {
  text: string;
  delay: number;
}

const FullTextComponent: FC<FullTextProps> = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (text.length) {
        const currentChar = text.charAt(index);
        const nextChar = text.charAt(index + 1);
        setDisplayText((prevDisplayText) => {
          if (currentChar === "." && nextChar !== " ") {
            return prevDisplayText + currentChar + " ";
          }
          return prevDisplayText + currentChar;
        });
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay, index]);

  return (
    <div className="full-text-section bg-info h-50 d-flex justify-content-center align-items-center">
      <textarea
        placeholder="Click on the generate text to convert audio into text"
        className="w-75"
        readOnly
        value={displayText}
        style={{ height: 250 }}
      />
    </div>
  );
};

export default FullTextComponent;
