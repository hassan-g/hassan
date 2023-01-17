import './Card.css'
import {FaStar, FaDownload} from 'react-icons/fa'



const Card = (props)=>{
    return(
        <div className="mostPopular-item">
                    <div className="card-wrapper">
                        <div className='img-wrapper'> 
                            <img className="mostpopular-item-image" src={props.image}/>

                        </div>
                        <div className="mostpopular-item-content">
                            <h4 className="mostpopular-item-title">
                                {props.title} <br/>
                                <span>{props.category}</span>
                            </h4>
                            <ul>
                                <li><span style={{'color':'yellow'}}><FaStar/> </span> <span>{props.rate}</span></li>
                                <li><span><FaDownload/> </span> <span>{props.download}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}

export default Card