import { useState } from "react";
import "./App.css";
import { hist } from "./utils/history";

function App() {
  const [page, setPage] = useState(hist.current_page());

  const handlePage = (url: string) => {
    hist.visit(url);
    setPage(url);
  };

  return (
    <>
      <iframe src={page} width="100%" height="600" title="browser" />

      <button onClick={() => handlePage("https://supabase.com")}>
        Supabase
      </button>
      <button onClick={() => handlePage("https://neon.com")}>Neon</button>
      <button onClick={() => handlePage("https://www.masterji.co")}>
        Masterji
      </button>

      <button
        onClick={() => {
          setPage(hist.back());
        }}
      >
        Back
      </button>

      <button
        onClick={() => {
          setPage(hist.forward());
        }}
      >
        Next
      </button>
    </>
  );
}

export default App;
