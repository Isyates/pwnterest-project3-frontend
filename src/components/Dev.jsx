//styled components
import styled from "styled-components"

const DevContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: grey;
    border-radius: 4em;
    height: 8em;
    width: 60%;
`
const DevImg = styled.img`
    object-fit: cover;
    width:7em;
    height:7em;
    border-radius: 4em;
    margin: .5em  
`
const DevStats = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    color: white;
    font-size: .8em;
    width: 90%; 
`

export default function Dev({ dev, key }) {

    //receives a bunch of props from each iteration of the map of the dev array
    const { name, img, github, blurb } = dev //destructuring

    return (
        <DevContainer key={key}>
                    <DevImg src={img} alt={name}/>
                    <DevStats>
                        <h5>{name}</h5>
                        <a href={github}>{github.slice(github.indexOf("/")+2)}</a>
                        <p>{blurb}</p>
                    </DevStats>
        </DevContainer>
    )
}