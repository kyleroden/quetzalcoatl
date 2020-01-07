import React from 'react';
import logo from './logo.svg';
import './App.css';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      link: "https://nytimes.com"
    }
  }
  inputKeyPress = (event) => {
    if(event.key === "Enter") {
      if(event.target.className === 'meal') {
        this.setState({
          meals: [...this.state.meals, event.target.value]
        });
      }
      else if(event.target.className === 'link') {
        this.setState({
          link: event.target.value
        });
      }
      event.target.value = ''
    }
  }
  removeMeal = (event) => {
    const mealNotCooked = event.target.previousSibling.data
    const mealNotCookedElement = document.createElement('li')
    mealNotCookedElement.textContent = mealNotCooked
    document.querySelector('#mealsNotCooked').append(mealNotCookedElement)
    event.target.parentElement.style.textDecoration = 'line-through'
    console.log(event.target)
  }
  render() {
    return (
      <div className="mealPlanDay">
        <h2>{this.props.day}</h2>
        <h3 id="mealName">Meal Plan:</h3>
        <ul className="mealsList">
          {this.state.meals.map((meal, index) => 
            <li key={index}>
              {meal}
              <button onClick={this.removeMeal}>X</button>
            </li>
          ) 
        } 
        </ul>
        <div>
          <p>Enter meal</p>
        <input onKeyPress={this.inputKeyPress} value={this.state.value} className='meal'/>
        </div>
        <div>
          <p>Add a link to meal(optional)</p>
          <input onKeyPress={this.inputKeyPress} value={this.state.value} className='link'/>
          <a id="" href={this.state.link}>Link</a>
        </div>
    </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <div className="weekOfMeals">
          <Day day="Monday"></Day>
          <Day day="Tuesday"></Day>
          <Day day="Wednesday"></Day>
          <Day day="Thursday"></Day>
          <Day day="Friday"></Day>
          <Day day="Saturday"></Day>
          <Day day="Sunday"></Day>
        </div>
        <div className="mealsUncookedContent">
          <h4>Meals Not Cooked</h4>
          <ul id="mealsNotCooked"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
