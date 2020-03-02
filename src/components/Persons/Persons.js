import React from 'react';
import Person from './Person/Person'

const Persons = (props) => props.person.map((newPerson, index) => {

  return (
    <div>
      {/* <h1 className = "StyleHeading">{props.title}</h1> */}
      <Person click={() => props.clicked(index)}
        title={props.title}
        key={index}
        name={newPerson.name}
        age={newPerson.age} />
    </div>
  )
})

export default Persons;