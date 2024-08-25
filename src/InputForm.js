import React, { useState } from 'react';

function InputForm({ onApiResponse }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const validateJson = (input) => {
    try {
      JSON.parse(input);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateJson(jsonInput)) {
      setError('Invalid JSON format');
      return;
    }

    setError(null);
    try {
      console.log(jsonInput);
      const response = await fetch('https://bajajtest-3.onrender.com/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonInput,
      });
      console.log(response);
      const data = await response.json();
      onApiResponse(data);
    } catch (error) {
      setError('Failed to fetch data from API');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter your JSON here'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    resize: 'none',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default InputForm;