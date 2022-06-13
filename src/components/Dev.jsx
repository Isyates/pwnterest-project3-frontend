//styled components
import styled from "styled-components"

const DevContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    // background-color: #444;
    background: linear-gradient(to right, #444, #345 100%);
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
    gap: .4em;
    justify-content: center;
    color: white;
    // font-size: .8em;
    width: 90%; 
    h3{
        font-style: italic;
        // margin-bottom: 1em;
        margin:0;
    }
    a{
        color:white;
        font-weight: 800;
        // font-size: .5em;
        margin: 0;
        padding: 0
    }
    p{
        // font-size: .8em
        margin:0
    }
`

export default function Dev({ dev, key }) {

    //receives a bunch of props from each iteration of the map of the dev array
    const { name, img, github, blurb, linkedin } = dev //destructuring

    return (
        <DevContainer key={key}>
                    <DevImg src={img} alt={name}/>
                    <DevStats>
                        <h3>{name}</h3>
                        <span>
                            <a href={github}>{github.slice(github.indexOf("/")+2)}</a>  //  <a href={linkedin}>{linkedin.slice(linkedin.indexOf("/")+2)}</a>
                        </span>
                        <p>{blurb}</p>
                    </DevStats>
        </DevContainer>
    )
}