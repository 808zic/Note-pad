
import React from "react";

function SaveLoad({ notes, onSaveNotes, onLoadNotes }) {
  const handleSave = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const handleLoad = () => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      onLoadNotes(JSON.parse(savedNotes));
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <button style={{ backgroundColor: 'lightgreen', padding: '5px', margin: '5px', borderRadius: '5px' }} onClick={handleSave}>Save</button>
      <button style={{ backgroundColor: 'lightblue', padding: '5px', margin: '5px', borderRadius: '5px' }} onClick={handleLoad}>Load</button>
    </div>
  );
}

export default SaveLoad;
