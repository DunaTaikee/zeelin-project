import React, { useState } from 'react';

interface SearchProps {
  onResult: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ onResult }) => {
  const [prompt, setPrompt] = useState<string>('');

  const handleSearch = async () => {
    if (!prompt) return;
    const res = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    onResult(data.text || '');
  };

  return (
    <div style={{ marginBottom: 16, display: 'flex' }}>
      <input
        style={{ flex: 1, padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
        placeholder="输入查询，例如：帮我推荐三家并购标的"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSearch}
        style={{ marginLeft: 8, padding: '8px 16px', border: 'none', borderRadius: 4, background: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >查询</button>
    </div>
  );
};

export default Search;