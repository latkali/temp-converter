import React, { useState } from 'react';
import {
    TextInput
} from "react-native";
function App() {
   const [number, setNumber] = useState("");
   const handleNumberChange = (text) => {
       if (!isNaN(text)) {
           setNumber(text);
       }
   };
  const [count, setCount] = useState(0);
  const convF = () => setCount((number * 9/5) + 32);
  const convCel = () => setCount((number - 32) * 5/9);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temperature Converter</h1>
      <h2>Temperature: {count}°</h2>
          <TextInput
              value={number}
              onChangeText={handleNumberChange}
              keyboardType="numeric"
              placeholder="Enter a number..."
          />
      <button onClick={convCel} style={{ margin: '5px' }}>Convert to Celcius</button>
      <button onClick={convF} style={{ margin: '5px' }}>Convert to Fahrenheit</button>
    </div>
  );
}
export default App;
