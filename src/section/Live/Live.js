import './Live.css'
import service_1 from '../../assets/images/service-01.jpg'
import service_2 from '../../assets/images/service-02.jpg'
import service_3 from '../../assets/images/service-03.jpg'

const Live =()=>{
    return(
        <div className='live'>
           <div className='box'>
                <div><img src={service_1}/></div>
                <h3>Go To Your Profile</h3>
                <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
           </div>
           <div className='box'>
                <div><img src={service_2}/></div>
                <h3>Live Stream Button</h3>
                <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
           </div>
           <div className='box'>
                <div><img src={service_3}/></div>
                <h3>You Are Live</h3>
                <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
           </div>
        </div>
    )
}

export default Live