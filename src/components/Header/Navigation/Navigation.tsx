import Logo from "./Logo/Logo";
import "./navigation.scss"
import {NavLink} from "react-router-dom"



function Navigation(){
    return(
        <>
            <div className="navigation">
                <nav>
                    <Logo/>
                    <NavLink className="navigation__item" to='/'>Homepage</NavLink>
                    <NavLink className="navigation__item" to='/rooms'>Roomspage</NavLink>
                    <NavLink className="navigation__item" to='/excursion'>Excursionpage</NavLink>
                    <NavLink className="navigation__item" to='/about'>Aboutpage</NavLink>
                    <NavLink className="navigation__item" to='/contact'>Contactpage</NavLink>
                </nav>
            </div>
            
        </>
    )
}

export default Navigation;