import './Content.css'

const Content = (props)=>{
    return(
        <div className="container main-container">{props.children}</div>
    )
}

export default Content