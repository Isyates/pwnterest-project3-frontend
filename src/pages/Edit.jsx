//import Link for Cancel button (Link to List route)
import { Link } from "react-router-dom"
//import useNavigate so we can send back to List after submit
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Button from "../components/styled-components/Button"
import Input from "../components/styled-components/Input"

const StyledBtn = styled.button`
background-color: red;
border: black2px;
border-radius: 8px;
margin: 2px;
color: white;
padding: 2px 32px ;
text-align: center;
text-decoration: none;
// display: block;
font-size: px;
display: block;
float: center;
`
const StyledDiv = styled.div`
// color: white;
a: visited{color: greenyellow};
// display: flex;
// flex-flow: column nowrap;
// justify-content: center;
text-align: center;
img{
    max-height: 55vh;
    border-radius: 10px;
    margin-bottom: .4em;
}
`

export default function Edit({posts, updatePost, deletePost}) {
console.log(posts)
    const { id } = useParams()
    let navigate = useNavigate()
let post = posts.find((foundPost) => foundPost._id === id)
    const [ editForm, setEditForm ] = useState(post)
    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        })
    }
    //handlesubmit handlechange
    const handleSubmit = (event) => {
        event.preventDefault()
        updatePost(editForm, id)
        navigate(`/${id}/show`)
    }
    //i may be forgetting something
    const removePost = () => {
        deletePost(id)
        navigate('/')
    }
    //prop is updatePost function, takes ID, invoked when submit clicked
    //props also includes posts array, use id when you forEach posts to find the post in question to render it to the form values
    const loaded = () => { 
       
        return <StyledDiv>   {/* //form for editing */}
        <h1>{post.title}</h1> 
        <img src={post.img} alt={post.title}/>
        <form onSubmit={handleSubmit}>
            <Input 
                type="text"
                name="title"
                placeholder="title"
                minLength="1"
                maxLength="35"
                value={editForm.title}
                onChange={handleChange}
                />
            <Input
                type="text"
                name="img"
                placeholder="url"
                value={editForm.img}
                onChange={handleChange}
                />
                <Button type="submit" value="Update Post"/>
        </form>
        <Link to={`/`}><Button value="Cancel"/></Link>
        <Button onClick={removePost} value="Delete Post"/>
        {/* populate form values from post */}

    </StyledDiv>

    }
    const loading = () => <h1>loading...</h1>
    return (posts) ? loaded() : loading()  
}