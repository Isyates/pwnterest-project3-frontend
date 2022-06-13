import { Link } from "react-router-dom"
import styled from "styled-components"

let SUPERCOOLLINK = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
color: black;
padding: .5em 0 .5em 0;
a{
    text-decoration: none;
    font-style: italic;
    font-weight: 500;
    font-size: .9em;
    :visited{
        color: black;
    }
}
`
export default function Footer() {
    return (
        <SUPERCOOLLINK>
            <Link to="/about">
                About our Devs
            </Link>
        </SUPERCOOLLINK>
    )
}

