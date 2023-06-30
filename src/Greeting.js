import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  return (
    <div>
      <label htmlFor="nameInput">Enter your name: </label>
      <input id="nameInput" type="text" value={name} onChange={handleNameChange} />
      <p>{name ? `Hello ${name}!` : 'Please enter your name.'}</p>
    </div>
  );
}

export default Greeting;
