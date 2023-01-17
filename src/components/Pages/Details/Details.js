import './Details.css'
import {SectionWrapper,SectionHeader,Card} from '../../../components/index'
import {View} from '../../../section/index'
import { FaDownload, FaServer, FaStar } from 'react-icons/fa'
import { GiRetroController } from "react-icons/gi";
import { Link } from 'react-router-dom';
import mostpopularData from '../../Data/MostPopularData';
import left from '../../../assets/images/feature-left.jpg'
import right from '../../../assets/images/feature-right.jpg'

const Details = ()=>{
    const card = mostpopularData.map(itme=>{

        return <Card key={itme.id} image={itme.image} title={itme.title} category={itme.category} rate={itme.rate} download={itme.download}/>
    })
    return(

        <>

            <div className='head-img'>
                <img src={left}/>
                <img src={right}/>
            </div>
            <SectionHeader>Fortnite Details</SectionHeader>

            <SectionWrapper>
                <div className='father'>
                    <div className='frist-sec'>
                        <ul >
                            <li>Fortnite <span><FaStar style={{'color':"yellow"}}/> 4.7</span></li>
                            <li>Sandbox <span><FaDownload style={{'color':'var(--color-primary)'}}/> 4.7</span></li>
                        </ul>
                    </div>

                    <div className='second-sec'>
                        <ul>   
                            <li><FaStar style={{'color':"yellow"}}/> <span>4.8</span></li>
                            <li><FaDownload style={{'color':'var(--color-primary)'}}/> <span>5M</span></li>
                            <li><FaServer style={{'color':'var(--color-primary)'}}/> <span>35GB</span></li>
                            <li><GiRetroController style={{'color':'var(--color-primary)'}}/> <span>Action</span></li>
                            
                        </ul>
                    </div>
                </div>

                <View/>
                <Link to='/' className='fortnite-btn '>Download Fortnite Now</Link>
            </SectionWrapper>

            <SectionWrapper>
                     <SectionHeader>Other Related Games</SectionHeader>
                     
                <div className="mostpopular-items">
                {card}

                </div>

                
            </SectionWrapper>
        </>
    )
}

export default Details