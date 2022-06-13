//styled
import styled from "styled-components"
//import Link (for use to hit the List route and New route)
import { Link } from "react-router-dom"
import logo from "../img/Logo2.png"
import plus from "../img/plus1.png"

const HeaderContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
padding: 0 1em;
.add{
    max-width: 2em;
}
.logo{
    max-width:4em;
}`

export default function Header() {
    return <HeaderContainer>
        {/* //Image on left side with Link to list route */}
        <Link to="/" ><img src={logo} className="logo" alt="Pwnterest"/></Link>
        {/* // + on right side with Link to create route */}
        <Link to="/create" className="createBtn"><img className="add" src={plus} alt="New Post" /></Link>
    </HeaderContainer>   
}


