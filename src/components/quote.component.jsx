import { useState, useEffect } from "react";

const Quote = ({ searchTerm }) => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getQuote = async () => {
      const response = await fetch(
        `https://animechan.vercel.app/api/random${searchTerm}`
      );
      const data = await response.json();
      setQuote(data);
      setLoading(false);
    };
    getQuote();
  }, [searchTerm]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="quote">
      <div className="quote_info">
        <h3>Anime: {quote.anime}</h3>
        <h3>Character: {quote.character}</h3>
      </div>
      <div className="quote_line">
        <h2>{quote.quote}</h2>
      </div>
    </section>
  );
};

export default Quote;
