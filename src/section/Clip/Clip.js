import './Clip.css'

const Clip = (props)=>{
    return (
        <div className='clip-con'>
            
            <div>
                <img src={props.image}/>

            </div>
            <div className='clip-title'>
                <h5>{props.title}</h5>
                <span> <i> {props.icon}</i> {props.view}</span>
            </div>
            
        </div>
    )
}

export default Clip