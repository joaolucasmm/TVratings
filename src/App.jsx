import Grid from "./components/grid/grid"
import Insert from "./components/Insert/Insert"
import Show from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("shows");

  return (
    <>
      <Insert />
      <h1>{content.toUpperCase()}</h1>
      <Show content={content} setContent={setContent} />
      <Grid content={content} />
    </>
  )
}

export default App
