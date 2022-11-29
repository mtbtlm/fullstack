import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import getData from '../App.js'
import CardMovie from "./CardMovie";
import FilmData from '../csvjson.json' 
import Info from './Info';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
           return value.Title.toString().toLowerCase().includes(searchWord.toString().toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
          } else {  
        setFilteredData(newFilter); 
          }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };

 return(
    <div className="search">
      <div className="searchInputs">
        <input 
        type="text" 
        placeholder = {placeholder} 
        value={wordEntered} 
        onChange={handleFilter} />
        <div className="searchIcon">
            {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        
      </div>
      { filteredData.length != 0 && (

        <div className="wrapper"> 
            {filteredData.slice(0 , 15).map((value,key) => {
                return(
                  <div className="card">
                    <div className="card__title">{value.Title} </div>

                    <p>Rating: {value.IMDB_Score}</p>
                    <p>Genre: {value.Genre}</p>

                    <div className="card__body">
                      
                      
                      <div className="card__image"><img src={value.Poster}/></div>
                    </div>
                  </div>
                )
       })}

             
        </div>
 )}



    </div>
  );
}

export default SearchBar;   
