//import useNavigate to redirect after submit
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Button from "../components/styled-components/Button"
import Input from "../components/styled-components/Input"
//prop is going to be createPost function

let CreateContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
height: 100%;
form{
    legend{
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 5px;
    }
    // input{
    //     width: 80%;
    //     margin-bottom: 5px;
    //     padding: 5px;
    //     letter-spacing: 1px;
    //     border-radius: 5px;
    //     border: 1px solid rgb(55,50,92);
    //     box-shadow: 1px 1px 2px grey;
    //     &:focus{
    //         outline: none;
    //         border: 2px solid orange;
    //     }
    }
    width: 80%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
`


export default function Create({ createPost }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        img: "",
        title: "",
    })

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // todo: Logic to check if vaild url
        // todo: Handle error first
        // todo: Return form to be created
        createPost(form)
        setForm({
            img: "",
            title: ""
        })
        navigate("/")
    }

    return <CreateContainer>

        {/* //form with handlechange handlesubmit */}
        <form onSubmit={handleSubmit}>
            <legend>Create New Post</legend>
            <Input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
                minLength="1"
                maxLength="35"
            />
            <Input
                type="url"
                name="img"
                placeholder="Image URL"
                value={form.img}
                onChange={handleChange}
            />
            <Button type="submit" value="Add Post"/>
        </form>
    </CreateContainer>

}
