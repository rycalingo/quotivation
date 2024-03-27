import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import { Loader } from "react-feather";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";

  const fetchQuotes = async ()=> {
    try {
      setIsLoading(true);
      const request = await fetch(quotesUrl);
      const results = await request.json();

      if (request.status === 200) setQuotes(results);

    } catch (error) {
      console.log("Error fetching -", error);
    }

    setIsLoading(false);
  };

  useEffect(()=> {
    fetchQuotes();
  }, [])
  return (
    <div className='App'>
    {isLoading ? <Loader /> : console.log(JSON.stringify(quotes))}
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}
export default App;
