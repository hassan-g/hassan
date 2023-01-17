import { Fragment } from 'react'
import './Browser.css'
import {SectionWrapper,SectionHeader,Card} from '../../../components/index'
import mostpopularData from '../../Data/MostPopularData'
import {Slider,Live} from '../../../section/index'
import { Link } from 'react-router-dom'




const Browser =()=>{
  
    const cards = mostpopularData.map(itme =>{

        if(itme.id <= 4){
            return(

                <Card key={itme.id} image={itme.image} title={itme.title} category={itme.category} rate={itme.rate} download={itme.download}/>
                   
               )
        }
     
    })
    return (
               

        <frameElement>
        <div className='browser'>
            <div className='slider'>
            <SectionWrapper >
                    <SectionHeader>Featured Games</SectionHeader>
                    <Slider/>
            </SectionWrapper>
            </div>

            <SectionWrapper>
                <SectionHeader>Top Downloaded</SectionHeader>
                <div className='browser-card'> {cards}</div>
            </SectionWrapper>


            </div>
            <SectionHeader>How To Start Your Live Stream</SectionHeader>
            <Live/>
            <div style={{padding:'15px',textAlign:'center'}} > <Link to='/Profile' className='btn' style={{backgroundColor:'var(--color-primary)', color:'#fff', borderRadius:'24px'}}>Go To  Profile</Link></div>
            </frameElement>
    )
}

export default Browser