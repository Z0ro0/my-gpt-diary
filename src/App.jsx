import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };
  const handleUserInput = (e) => {
    setUserInput(e.target.value); // Update the userInput state with the input value
  };
  
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const num = Number(userInput);
      if (Number.isInteger(num)) {
        setCount(num);
        setUserInput(""); // Clear the input field
      }
    }
  };

  return (
    <>
      <div>current count: {count}</div>
      <div>
        <div>count value input: </div>
        <input
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleEnter} // Use handleEnter for Enter key press
        />
      </div>
      <div>buttons: </div>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </>
  );
}

export default App;
