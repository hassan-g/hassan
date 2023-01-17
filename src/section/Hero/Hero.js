import './Hero.css'

const Hero = ()=>{
    return(
        <div className="hero-main">
            <div className="hero-text">
                <h6 className="hero-subtitle ">Welcome To Cyborg</h6>
                <h4 className="hero-title "><em>Browse</em> Our Popular Games Here</h4>
            </div>
            <div className="main-button">
                <a href="browse.html" className="hero-btn btn  ">Browse Now</a>
            </div>
        </div>
    )
}

export default Hero