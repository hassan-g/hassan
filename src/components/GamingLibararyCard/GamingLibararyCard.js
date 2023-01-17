import './GamingLibararyCard.css'

const GamingLibararyCard = (props)=>{
    return(
        <div className='gaming-libarary-card'>
            <ul>
                <li><img src={props.image}/></li>
                <li> <h4>{props.title}</h4>  <span> {props.category}</span> </li>
                <li> <h4>Date Added</h4>  <span> {props.date}</span> </li>
                <li> <h4>Hours played</h4>  <span> {props.hours_played}</span> </li>
                <li> <h4>Currently </h4>  <span> {props.download}</span> </li>
                <div className='main-button '>
                    <a href='#' className='btn ' style={{background:'var(--color-primary)', color:'#fff'}}> Download</a>
                </div>
            </ul>
        </div>
    )
}

export default GamingLibararyCard