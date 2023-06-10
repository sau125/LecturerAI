import { ChangeEvent, FC, useEffect, useState } from "react";
import FullTextComponent from "./Components/FullTextSection/FullText.component";
import SummarySectionComponent from "./Components/SummarySection/SummarySection.component";

const HomePageComponent: FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const data = new FormData();
      data.append("file", file);
      data.append("model", "whisper-1");
      data.append("language", "en");
      setFormData(data);

      // check if the size is less than 25MB
      if (file.size > 25 * 1024 * 1024) {
        alert("Please upload an audio file less than 25MB");
        return;
      }
    }
  };

  const [convertedText, setConvertedText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const GenerateText = async () => {
    setLoading(true);
    const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_OPENAI_API_KEY}`,
      },
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);

    setConvertedText(data.text);
  };

  useEffect(() => {}, [convertedText]);
  return (
    <div className="d-flex home-page m-4 pb-2" style={{ height: 580 }}>
      <div className="col-4 px-4">
        <div
          style={{ backgroundColor: "#78aafa" }}
          className="p-2 upload-section bg-gradient h-100 d-flex justify-content-center align-items-center"
        >
          <div className="col ml-0">
            <div
              className="w-100 d-flex justify-content-center"
              style={{ backgroundColor: "#3883fc" }}
            >
              <input
                style={{ backgroundColor: "#9abefc" }}
                type="file"
                accept="audio/*"
                onChange={(e) => handleFile(e)}
              />
            </div>

            <div className="w-100 d-flex mt-4 justify-content-center">
              <button
                style={{ backgroundColor: "#3883fc" }}
                onClick={GenerateText}
              >
                Generate Text
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-8">
        <FullTextComponent text={convertedText} delay={10} />
        <SummarySectionComponent text={convertedText} />
      </div>
    </div>
  );
};

export default HomePageComponent;
