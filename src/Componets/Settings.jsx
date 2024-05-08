import React from "react";

function Settings({ fontSize, onFontSizeChange, fontStyle, onFontStyleChange, lineSpacing, onLineSpacingChange, theme, onThemeChange }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <div>
        <label style={{ color: 'black' }}>
          Font Size:
          <input type="range" min="10" max="36" value={fontSize} onChange={(e) => onFontSizeChange(e.target.value)} style={{ backgroundColor: 'lightyellow', padding: '5px', margin: '5px', borderRadius: '5px' }} />
        </label>
      </div>
      <div style={{ backgroundColor: 'lightgray', padding: '5px', margin: '5px', borderRadius: '5px' }}>
        <label style={{ color: 'black' }}>
          Font Style:
          <select value={fontStyle} onChange={(e) => onFontStyleChange(e.target.value)} style={{ backgroundColor: 'gray', padding: '5px', margin: '5px', borderRadius: '5px' }}>
            <option value="normal" style={{ color: 'blACK' }}>Normal</option>
            <option value="italic" style={{ color: 'black' }}>Italic</option>
            <option value="oblique" style={{ color: 'black' }}>Oblique</option>
          </select>
        </label>
      </div>
      <div style={{ backgroundColor: 'lightgray', padding: '5px', margin: '5px', borderRadius: '5px' }}>
        <label style={{ color: 'black' }}>
          Line Spacing:
          <input type="range" min="1" max="3" value={lineSpacing} onChange={(e) => onLineSpacingChange(e.target.value)} style={{ backgroundColor: '', padding: '5px', margin: '5px', borderRadius: '5px' }} />
        </label>
      </div>
      <div style={{ backgroundColor: 'lightgray', padding: '5px', margin: '5px', borderRadius: '5px' }}>
        <label style={{ color: 'black' }}>
          Theme:
          <select value={theme} onChange={(e) => onThemeChange(e.target.value)} style={{ backgroundColor: 'gray', padding: '5px', margin: '5px', borderRadius: '5px' }}>
            <option value="light" style={{ color: 'black' }}>Light</option>
            <option value="dark" style={{ color: 'black' }}>Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Settings;