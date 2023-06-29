import { useState } from "react";

export default function ButtonTest() {
  const [color, setColor] = useState('');
  const [text, setText] = useState('test');

  const handleTextChange = (event) => setText(event.target.value);
  const handleColorChange = (event) => setColor(event.target.value);

  return (
    <div>
      <form>
        <label>Button Text</label>
        <input type="text" value={text} onChange={handleTextChange} />
        <label>Button Color</label>
        <input type="radio" name="color" value="Red" onChange={handleColorChange} />
        <input type="radio" name="color" value="Blue" onChange={handleColorChange} />
        <input type="radio" name="color" value="Yellow" onChange={handleColorChange} />
      </form>

      <button className={color}>{text}</button>
    </div>
  )
}