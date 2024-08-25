import React, { useState } from 'react';
import InputForm from './InputForm';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);

  const handleApiResponse = (data) => {
    setResponse(data);
  };

  return (
    <div className="App">
      <h1>ABCD123</h1> {/* Replace with your actual roll number */}
      <InputForm onApiResponse={handleApiResponse} />
      {response && (
        <div className="response">
          <h2>API Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;