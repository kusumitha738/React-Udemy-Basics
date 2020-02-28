import React from 'react';
import Person from './Person/Person'

const Persons = (props) => props.person.map((newPerson, index) =>
    <Person click={() => props.clicked(index)} 
      key={index} 
      name={newPerson.name} 
      age={newPerson.age} />
  )

export default Persons;