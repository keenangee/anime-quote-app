import { useState, useEffect } from "react";

const Quote = ({ searchTerm }) => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const getQuote = async () => {
      const response = await fetch(
        `https://animechan.vercel.app/api/${searchTerm ?? "random"}`
      ).catch((error) => {
        setError(true);
      });
      const data = await response.json();
      setQuote(data);
      setLoading(false);
    };
    getQuote();
  }, [searchTerm]);

  if (error) {
    return (
      <div className="error">
        <h2>Oh no... please select search criteria</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className="quote">
      <div className="quote_info">
        <h3>Anime:</h3>
        <h3>Character:</h3>
        <p>{quote.anime}</p>
        <p>{quote.character}</p>
      </div>
      <div className="quote_line">
        <h2>{quote.quote}</h2>
      </div>
    </section>
  );
};

export default Quote;
