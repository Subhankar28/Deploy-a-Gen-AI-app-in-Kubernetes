
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_input: input })
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div className="App">
      <h2>Chat with AI (Mocked)</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <p><strong>AI:</strong> {reply}</p>
    </div>
  );
}

export default App;
