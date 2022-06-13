//import Link for Cancel button (Link to List route)
import { Link } from "react-router-dom"
//import useNavigate so we can send back to List after submit
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

const StyledBtn = styled.button`
background-color: red;
border: black2px;
border-radius: 8px;
margin: 2px;
color: white;
padding: 2px 32px ;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: px;

`
const StyledDiv = styled.div`
color: white;
a: visited{color: greenyellow};
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
        <h1>{post.name}</h1> 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder="title"
                minLength="1"
                maxLength="35"
                value={editForm.title}
                onChange={handleChange}
                />
            <input
                type="text"
                name="img"
                placeholder="url"
                value={editForm.img}
                onChange={handleChange}
                />
                <button type="submit">Update</button>
        </form>
        <StyledBtn onClick={removePost}>Delete Post</StyledBtn>
        <Link to={`/`}>Cancel</Link>
        {/* populate form values from post */}

    </StyledDiv>

    }
    const loading = () => <h1>loading...</h1>
    return (posts) ? loaded() : loading()  
}