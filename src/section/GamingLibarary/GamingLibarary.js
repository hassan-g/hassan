import './GamingLibarary.css'
import { SectionHeader,SectionWrapper,GamingLibararyCard} from '../../components/index'
import GamingLibararyData from '../../components/Data/GamingLibraryData'



const GamingLibarary = ()=>{
    const card = GamingLibararyData.map(itme=>{

        return <GamingLibararyCard key={itme.id} image={itme.image} title={itme.title} category={itme.category} hours_played={itme.hours_played} date={itme.date} download={itme.download}/>
    })
    return(
    
        <SectionWrapper>

            <SectionHeader>Gaming Libarary</SectionHeader>

                 <div className="gaming-libarary">
                    {card}
                </div>
        </SectionWrapper>
   
    )
}

export default GamingLibarary