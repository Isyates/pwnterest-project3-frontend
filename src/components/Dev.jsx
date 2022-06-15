//styled components
import styled from "styled-components"

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
    justify-content: center;
    color: white;
    // font-size: .8em;
    width: 100%; 
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
    i{
        font-size: 1.5em;
        margin-left: .4em;
    }
    p{
        font-size: .8em
        margin:0;
        margin-right: 2em;
        overflow-y: scroll;
        height: 3em;
        margin: 0;  
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
                <a href={github}><i class="fa-brands fa-github-square"></i></a>
                <a href={linkedin}><i class="fa-brands fa-linkedin"></i></a>
                </span>
                <p>{blurb}</p>
            </DevStats>
        </DevContainer>
    )
}