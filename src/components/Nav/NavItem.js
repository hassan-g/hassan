

const NavIem =  (props) =>{
    return(
        <li className="nav-item">
            {props.children}
        </li>
        
    )
}

const NavItemDropDown = (props) =>{
   return(
    <li className="nav-item dropdown">
        
             {props.children}

    </li>
   )

}
export {NavItemDropDown}
export default NavIem