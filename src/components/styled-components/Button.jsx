import styled from "styled-components"

const StyledButton = styled.button`
        width: 40%;
        background-color:  rgb(44,90,145);
        border-radius: 15px;
        padding: .5em;
        color: white;
        font-weight: bold;
        border: 0;
        filter: drop-shadow(5px 7px 0px rgb(55,50,92));
        margin: .5em;
`

export default function Button(props) {
return <StyledButton type={props.type} onClick={props.onClick}>{props.value}</StyledButton>
}