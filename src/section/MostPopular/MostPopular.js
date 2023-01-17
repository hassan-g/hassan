import './MostPopular.css'
import { Card ,SectionHeader,SectionWrapper} from '../../components/index'
import mostpopularData from '../../components/Data/MostPopularData'

const MostPoular = ()=>{


    const card = mostpopularData.map(itme=>{
      
        return <Card key={itme.id} image={itme.image} title={itme.title} category={itme.category} rate={itme.rate} download={itme.download}/>
    })
    return(
        <>
            <SectionWrapper>

                <SectionHeader>Most Popular</SectionHeader>

                <div className="mostpopular-items">


                {card}
            </div>
            </SectionWrapper>
            </>
        
    )
}

export default MostPoular