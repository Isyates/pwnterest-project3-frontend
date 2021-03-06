//import Link for use in hitting Show route
import { Link } from "react-router-dom"
import styled from "styled-components"

//this is the "card"
//this Component displays within List
//is rendered by the map of posts array in List page
const PostContainer = styled.div`
box-sizing: border-box;
border-radius: .5em;
padding: .5em;
background-color: rgb(55,50,92);
height: min-content;
.post-title{
    font-size: 1.2em;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px black;
    letter-spacing: .05em;
    text-decoration: none;
    font-style: italic;
    padding: 0;
    margin: 0;
    position: relative;
    bottom: 1.5em;
    left: .5em;
    margin-bottom: -1.3em;
}
.post-image{
    max-width: 98%;
    max-height: 30vh;
}
.image-block{
    width: 100%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: rgb(44,90,145);
    object-fit: cover;
    border-radius: .2em;
}
`

export default function Post({ post }) {
    const { key, _id, title, img } = post
    console.log(post)
    return (
        <Link key={key} to={`${_id}/show`}>
            <PostContainer>
                {/* //entire thing is basically a Link to show route */}
                {/* //displays image, displays title, Link is to Show route with id */}
                <div className="image-block">
                    <img src={img} alt="image" className="post-image" />
                </div>
                {/* could truncate title here with the "..." */}
                {(title) ? <div className="post-title">{title}</div> : ""}
            </PostContainer>
        </Link>
    )
}