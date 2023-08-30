import React, { useState } from "react";

function Notes() {
  const [heading, setHeading] = useState("");
  const [notes, setNotes] = useState("");

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="note">
      <center>
        <input
          type="text"
          value={heading}
          onChange={handleHeadingChange}
          placeholder="TITLE"
        />
        <textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder="NOTES"
        />
        <h1>{heading}</h1>
        <p>{notes}</p>
      </center>
    </div>
  );
}

export default Notes;


// import React from "react";

// function Notes() {
//   return (
//     <div className="note">
//       <center>  
//         <h1>*Heading*</h1>
//       <p>
//         *notes*
//       </p>
//       </center>
//     </div>
//   );
// }

// export default Notes;
