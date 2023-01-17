import './Profile.css'
import { Link } from 'react-router-dom'
import './Profile.css'
import { GamingLibarary,Clip} from '../../../section/index'
import {SectionWrapper ,SectionHeader} from '../../../components/index'
import profile from '../../../assets/images/profile.jpg'
import ClipData from '../../Data/ClipData'
import { FaEye } from 'react-icons/fa'


const Profile = ()=>{

    const clips = ClipData.map(clip=>{
        return (
            <Clip id={clip.id} title={clip.title} image={clip.image} view={clip.view} icon={<FaEye/>}/>
        )
    })
    return(
        <>  
            <SectionWrapper>
                <div className='profile'>
                    <div>
                        <img src={profile}/>
                    </div>

                    <div className='profile-card'>
                        <ul>
                            <li><p className='offline'>Offline</p> </li>
                            <li><h3>Hassan G</h3></li>
                            <li><p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p></li>
                            <li className='profile-btn'> Start Live Stream  </li>
                        </ul>
                    </div>

                    <div className='prfile-details'>
                        <ul className='ul-detail'>
                            <li><p>Games Downloaded</p> 3</li>
                            <li><p>Friends Online</p> 16</li>
                            <li><p>Live Streams</p> None</li>
                            <li><p>Clips</p> 29</li>
                        </ul>
                    </div>
                </div>

                <SectionHeader>Your Most Popular Clips</SectionHeader>
                <div className='clip'>
                    {clips}
                </div> 
            </SectionWrapper>
             <GamingLibarary/>
        </>
    )
}

export default Profile