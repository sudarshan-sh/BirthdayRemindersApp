import React, { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data)

  return ( <main>
    <section className='container'>
      <h3 className='people_birthday'>{ people.length } birthdays today</h3>
      <List people={people} />
      <button className='btn_clear' onClick={() => setPeople([])}>clear all</button>
    </section>
  </main>
  );
}

export default App;
