import "./App.css";
import Quote from "./components/quote.component";
import Random from "./components/random.component";
import Search from "./components/search.component";
import Title from "./components/title.component";
import { useState } from "react";

function App() {
  const [quotePath, setQuotePath] = useState("");

  return (
    <div className="App">
      <Title />
      <Quote searchTerm={quotePath} />
      <Random setQuotePath={setQuotePath} />
      <Search setQuotePath={setQuotePath} />
    </div>
  );
}

export default App;
