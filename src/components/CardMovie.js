import React, { useState } from "react";
import './CardMovie.css';
import Info from './Info';


const CardMovie = ({ data }) => {
    return (
        <div className="card">
            <div className="card__title">{data.Title} </div>
            <div className="card__body">
                <Info Info={data.Info}/>
                
                <div className="card__image"><img src={data.Poster}/></div>
            </div>
        </div>
    )
};

export default CardMovie;   