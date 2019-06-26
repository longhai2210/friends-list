import React from 'react';
import './App.css';

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  
  return (
  <div className="person">
    <img src={url} alt="" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>);
}

const PersonList = () => {
  const people = [
    {img:60, name:'dianna', job:'developer'},
    {img:49, name:'sue', job:'designer'},
    {img:58, name:'libra', job:'fashionista'}
  ]
  
  return (<section>
    <Person person={people[0]} />
    <Person person={people[1]}>
      This person description   
    </Person> 
    <Person person={people[2]} />
  </section>  
  );
}

const App = () => (<PersonList />)

export default App;
