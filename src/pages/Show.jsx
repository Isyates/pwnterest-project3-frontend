//import Link for displaying Edit route
import { useParams, Link } from 'react-router-dom'
import styled from "styled-components"
import Button from "../components/styled-components/Button"

const ShowContainer = styled.div`
display: flex;
flex-flow: column nowrap;
text-align: center;
height: 100%;
.image-container{
    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 80%;
}
img{
    max-height: 70vh;
    align-self: center;
    max-width: 100%;
    border-radius: 1em;
}
`

export default function Show(props) {
    const { id } = useParams() //found ID from paramaters
    const loaded = () => {

        const posts = props.posts // changed posts into variable inside file
        const post = posts.find((displayedPost) => displayedPost._id === id) //found the selected post and assigned it to post

        return (
            <ShowContainer>
                {/* returns the img, title and the link to the edit page */}
                {post.title ? <h2>{post.title}</h2> : <div></div>}
                <div className="image-container">
                    <a href={post.img} target="_blank"><img src={post.img} alt={post.title} /></a>
                </div>
                <Link to={`/${id}/edit`}><Button value="Edit" /></Link>
                {/* //props are the state (posts array) */}
                {/* //use req.params.id to forEach the array and find the post in question based on id */}
                {/* // props.posts.forEach() */}
                {/* //render this post */}
            </ShowContainer>
        )
    }

    const loading = () => <h1>Loading...</h1>
    return (props.posts) ? loaded() : loading()
}