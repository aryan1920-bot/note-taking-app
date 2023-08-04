import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";

function App() {
  const [noteSections, setNoteSections] = useState([<Notes key={0} />]);

  const addNoteSection = () => {
    const newKey = noteSections.length;
    setNoteSections([...noteSections, <Notes key={newKey} />]);
  };

  return (
    <div>
      <Header />
      {noteSections}
      <button onClick={addNoteSection}>+ Add Note Section</button>
      <Footer />
    </div>
  );
}

export default App;
