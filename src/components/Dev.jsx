import styled from "styled-components"
import github_img from "../img/github.png"
import linkedin_img from "../img/linkedin.png"

const DevContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    // background-color: #444;
    background: linear-gradient(to right, #444, #345 100%);
    border-radius: 4em;
    height: 8em;
    width: 80%;
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
    justify-content: flex-start;
    color: white;
    padding-top: .5em;
    // font-size: .8em;
    width: 100%; 
    // background-color: blue;
    h3{
        font-style: italic;
        // margin-bottom: 1em;
        margin:0;
        display: inline;
    }
    a{
        color:white;
        font-weight: 800;
        // font-size: .5em;
        margin: 0;
        padding: 0
    }
    img{
        width: 1.25em;
        margin-left: .7em;
        filter: invert(1);
        position: relative;
        top: 3px;
        border-radius: .1em
    }
    p{
        font-size: .9em;
        margin:0;
        margin-right: 2em;
        overflow-y: scroll;
        height: 5em;
        margin: 0;  
        width: 95%;
        ::-webkit-scrollbar {
            display: none;
      }
    }
`

export default function Dev({ dev, idx }) {

    //receives a bunch of props from each iteration of the map of the dev array
    const { name, img, github, blurb, linkedin } = dev //destructuring
    return (
        <DevContainer>
            <DevImg src={img} alt={name} />
            <DevStats>
                <span>
                <h3>{name}</h3>
                <a href={github}><img src={github_img} alt="github link" /></a>
                <a href={linkedin}><img src={linkedin_img} alt="linkedin link" /></a>
                </span>
                <p>{blurb}</p>
            </DevStats>
        </DevContainer>
    )
}