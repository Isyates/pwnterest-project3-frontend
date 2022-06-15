import styled from "styled-components"

const StyledInput = styled.input`
        width: 80%;
        margin-bottom: 5px;
        padding: 5px;
        letter-spacing: 1px;
        border-radius: 5px;
        border: 1px solid rgb(55,50,92);
        box-shadow: 1px 1px 2px grey;
        &:focus{
            outline: none;
            border: 2px solid orange;
        }
`

export default function Input(props) {
    return <StyledInput
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChange}
    />
}