import "./App.css";
import Quote from "./components/quote.component";
import Random from "./components/random.component";
import Search from "./components/search.component";
import Title from "./components/title.component";
import { useState } from "react";

function App() {
  const [quotePath, setQuotePath] = useState([]);

  return (
    <div className="App">
      <header className="hero">
        <Title />
      </header>
      <section className="quote-area">
        <Quote quotePath={quotePath} />
      </section>
      <section className="form-area">
        <Random setQuotePath={setQuotePath} />
        <Search setQuotePath={setQuotePath} />
      </section>
    </div>
  );
}

export default App;
