import { Configuration, OpenAIApi } from "openai";
import { FC, useEffect, useState } from "react";

interface SummarySectionProps {
  text: string;
}

const SummarySectionComponent: FC<SummarySectionProps> = ({ text }) => {
  const [summarizedtext, setsummarizedtext] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: process.env.REACT_APP_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const HandleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(text),
        temperature: 0.6,
        max_tokens: 100,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setsummarizedtext(res?.data?.choices[0]?.text);
        }
      })
      .catch((err) => {
        console.log(err, "An error occured");
      });
  };

  console.log("Summarised text: ", summarizedtext);

  function generatePrompt(text: string) {
    return `Summarize this ${text}. and break them into seperate lines`;
  }

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className=" h-50 ">
      <div>
        <button
          style={{ backgroundColor: "#3883fc" }}
          onClick={(e) => HandleSubmit(e)}
        >
          Summarize Text
        </button>
      </div>
      <div
        style={{ backgroundColor: "#78aafa" }}
        className="summary-section mt-2"
      >
        <textarea
          placeholder="Click on the Summarise Text button to summarise the text"
          className="w-75"
          readOnly
          value={summarizedtext}
          style={{ height: 230, backgroundColor: "#9abefc" }}
        />
      </div>
    </div>
  );
};

export default SummarySectionComponent;
