import React, { useState } from "react";
import axios from "axios";
import './App.css';
import SearchBar from './components/SearchBar';
import FilmData from './csvjson.json'  
import CardMovie from "./components/CardMovie";


  function callApi_action() {
    fetch('http://127.0.0.1:5000/action', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }
  function callApi_romance() {
    fetch('http://127.0.0.1:5000/romance', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }
  function callApi_scifi() {
    fetch('http://127.0.0.1:5000/scifi', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }
  function App() {

   // new line start

  function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__Categorie">{props.Categorie}</p>
          <p className="card__Score">{props.Score}</p>
        </div>
      </div>
    );
  }

  // function getData() {
  //   axios({
  //     method: "GET",
  //     url:"/profile",
  //   })
  //   .then((response) => {
  //     const res =response.data
  //     setProfileData(({
  //       profile_name: res.name,
  //       about_me: res.about}))
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.log(error.response)
  //       console.log(error.response.status)
  //       console.log(error.response.headers)
  //       }
  //   })}
    // end of new line 

    return (
      <div className="App">
       
       
        <SearchBar placeholder="Entrer un film..." data={FilmData}/>
        <div className="button_back">
          <h1 className="tittle_button">Top film par genre: </h1>
          <button className="button_click" onClick={callApi_action}>Film d'action</button>
          <button className="button_click" onClick={callApi_romance}>Film romance</button>
          <button className="button_click" onClick={callApi_scifi}>Film Sci-Fi</button>
        </div>
        
        
        
        

    </div>
        
    
  );
}

export default App;
