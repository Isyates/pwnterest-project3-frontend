//Dev component
import Dev from "../components/Dev"

//styled components
import styled from "styled-components"

//us
import hieu from "../devs/hieu"
import isiah from "../devs/isiah"
import kyle from "../devs/kyle"
import rich from "../devs/rich"

//create array to iterate
let devs = [hieu, isiah, kyle, rich]

//randomize the array
let randomDevs = devs.sort(() => Math.random() - 0.5);

const aboutDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
`


export default function About() {
    // then map over the randomDevs array and display <Dev/>'s
    return <aboutDiv>
        {randomDevs.map((dev, idx) => {
                   return <Dev dev={dev} key={idx}/>
        })}
    </aboutDiv>
}