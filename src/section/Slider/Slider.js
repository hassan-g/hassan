import './Slider.css'
import mostpopularData from '../../components/Data/MostPopularData'
import {FaStar, FaDownload} from 'react-icons/fa'
import { useState,useEffect } from 'react'


const Slider = ()=>{
    const counter = 1

    return(
        
        <div className="mostPopular-item">
        <div className="card-wrapper">
            <div className='img-wrapper'> 
                <img className="mostpopular-item-image" src={mostpopularData[counter].image}/>

            </div>
            <div className="mostpopular-item-content">
                <h4 className="mostpopular-item-title">
                    {mostpopularData[counter].title} <br/>
                    <span>{mostpopularData[counter].category}</span>
                </h4>
                <ul>
                    <li><span style={{'color':'yellow'}}><FaStar/> </span> <span>{mostpopularData[counter].rate}</span></li>
                    <li><span><FaDownload/> </span> <span>{mostpopularData[0].download}</span></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Slider