import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {  name: "max", age: 28 },
      {  name: "manu", age: 29 },
      {  name: "shilpa", age: 30 }
    ],
    showPersons: false
  }

  switchHandler = () => {
    //console.log("was clicked");
    this.setState({
      person: [
        { name: "maximillai", age: 29 },
        { name: "manu", age: 39 },
        { name: "shilpa", age: 50 }
      ]
    })
  }

  changeHandeler = (event) => {
    let valuetext = event.target.value;
    this.setState({
      person: [
        { name: "maximillai", age: 29 },
        { name: valuetext, age: 39 },
        { name: "shilpa", age: 50 }
      ]
    })
  }

  toggleParentDiv = () => {
    const { showPersons } = this.state
    this.setState({
      showPersons: !showPersons
    })
  }

  deletePara = (index) => {
    console.log("Index", index)
    const PersonData = [...this.state.person]
    PersonData.splice(index, 1);
    // return PersonData
    this.setState({ person: PersonData })
    
  }

  render() {
    const { person, showPersons } = this.state;
    console.log("Person", person)
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let classes = []; // ========== This is crashing the render ===========
    // if (person.length <= 2) {
    //   return classes.push['red'];  // classes = ['red']
    // }
    // if (person.length <= 1) {
    //   return classes.push['blue'] // classes = ['red', 'blue']
    // }

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <button onClick={this.switchHandler}>Switch</button>
      //     <Person name={person[0].name} age={person[0].age} click={this.switchHandler} />
      //     <Person name={person[1].name} age={person[1].age} change={this.changeHandeler} />
      //     <Person name={person[2].name} age={person[2].age} > Drawing </Person>
      //   </header>
      // </div>

      //========= Rendering content conditionally =========

      // <div className="App">
      //   <header className="App-header">
      //     <button onClick={this.toggleParentDiv}>Switch</button>
      //     {this.state.showPersons ? <div>
      //     <Person name={person[0].name} age={person[0].age} click={this.switchHandler} />
      //     <Person name={person[1].name} age={person[1].age} change={this.changeHandeler} />
      //     <Person name={person[2].name} age={person[2].age} > Drawing </Person>
      //     </div> : null}
      //   </header>
      // </div>

      // ========= Outputting Lists ==============

      <div className="App">
        <header className="App-header">
          <button
            style={style}
            onClick={this.toggleParentDiv}>Switch</button>
          {showPersons && person ? 
          <div>
            {person.map((newPerson, index) =>
              <Person click={() => this.deletePara(index)} 
                key={index} 
                name={newPerson.name} 
                age={newPerson.age} />
            )}
          </div> : ""
          }
        </header>
      </div>
    )
    // style.backgroundColor = 'red' // NOT WORKING // COLOR NOT CHANGING TO RED ON BUTTON CHANGE
  }
}

export default App;
