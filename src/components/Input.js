import React, { useState } from 'react';

const Input = () => {
  const [name, setName] = useState('');

  return (
    <form>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
