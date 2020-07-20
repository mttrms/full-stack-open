import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setPersons([
      ...persons,
      { name: newName }
    ]);

    setNewName('');
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="nameInput"
            onChange={handleNameChange}
            value={newName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {renderPersons(persons)}
    </div>
  )
};

const renderPersons = (persons) => {
  const personList = persons.map((person, idx) => {
    const { name } = person;

    return <li key={idx}>{name}</li>
  });

  return (
    <ul>
      {personList}
    </ul>
  )
};

export default App;
