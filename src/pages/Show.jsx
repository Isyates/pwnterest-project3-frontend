//import Link for displaying Edit route
import { useParams, Link } from 'react-router-dom'
import styled from "styled-components"

const ShowContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
height: 100%;
.image-container{
    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 90%;
}
img{
    align-self: center;
    // height: 90%;
    max-height: 100%;
    max-width: 100%;
    border-radius: 1em;
    // min-height: 30vh;
    // min-width: 30vw;
}
.showBottom{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    padding: 0 3em;
    h2{
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: black;
        font-style: italic;
        :visited{
            color: black;
        }
    }
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
                <div className="image-container">
                    <a href={post.img} target="_blank"><img src={post.img} alt={post.title} /></a>
                </div>
                <div className='showBottom'>
                    {post.title ? <h2>{post.title}</h2> : <div></div>}
                    <Link to={`/${id}/edit`}>Edit Post</Link>
                </div>  
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