import { Fragment } from 'react'
import './View.css'
import Detail_1 from '../../assets/images/details-01.jpg'
import Detail_2 from '../../assets/images/details-02.jpg'
import Detail_3 from '../../assets/images/details-03.jpg'

const View = ()=>{
    return(
        <Fragment>
            <div className='images'>
                <img src={Detail_1}/>
                <img src={Detail_2}/>
                <img src={Detail_3}/>
            </div>
            <p>
            Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. 
            
            </p>
        </Fragment>
    )
}

export default View