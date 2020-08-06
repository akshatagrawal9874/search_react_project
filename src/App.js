import React from 'react';
import './App.css';
import CardList from "./cardlist"
import "./CardList.css"

class App extends React.Component {
 constructor(){
   super();
   this.state={
     monsters:[],
     searchField:""
   }
 }
   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(response=>response.json())
     .then(user=>this.setState({monsters:user}))
   }

  render(){
    const {monsters,searchField}=this.state;
    const filteredmonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    const a=filteredmonster.map(user=>
      <CardList  key={user.id} monster={user}/>
    )
    return (
    <div>
      <h1>Search monsters</h1>
      <br />
    <center><input type="search" name="searchField" placeholder="search monsters" onChange={(e)=>this.setState({searchField:e.target.value})}/></center>
    <br />
    <div className="container">
        {a}
    </div>
    </div>
  );
}
}
export default App;
