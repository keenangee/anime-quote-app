import { useState, useEffect } from "react";

const Random = ({ setQuotePath }) => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setQuotePath(quote);
    setQuote(null);
  }, [quote]);

  return (
    <div className="random_button_container">
      <button
        className="random_button"
        onClick={() => {
          setQuote("random");
        }}
      >
        Feeling Lucky?
      </button>
    </div>
  );
};

export default Random;
