import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { id: 0, name: "max", age: 28 },
      { id: 1, name: "manu", age: 29 },
      { id: 2, name: "shilpa", age: 30 }
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
    debugger
    const { person } = this.state
   let newData =  person.filter(k => k.id !== index);

    this.setState({
      person: newData
    })

    //person.filter()
  }

  render() {
    const { person, showPersons } = this.state
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
          <button onClick={this.toggleParentDiv}>Switch</button>
          {showPersons && <div>
            {person.map((newPerson, index) =>
              <Person click={() => this.deletePara(index)} name={newPerson.name} age={newPerson.age} />
            )}
          </div>}
        </header>
      </div>
    )
  }

}

export default App;
