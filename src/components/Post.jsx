//import Link for use in hitting Show route
import { Link } from "react-router-dom"
import styled from "styled-components"

//this is the "card"
//this Component displays within List
//is rendered by the map of posts array in List page
const PostContainer = styled.div`
box-sizing: border-box;
border-radius: .5em;
padding: .2em;
padding: .2em;
background-color: rgb(55,50,92);
// height: 90%;

.post-title{
    font-size: 1.2em;
    color: white;
    font-family: 'Open Sans', sans-serif;
    text-shadow: 1px 1px 2px black;
    text-decoration: none;
    font-style: italic;
    padding: 0;
    margin: 0;
}
.post-image{
    max-width: 98%;
    max-height: 98%;
    height: 100%    
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
img{
    // border: 1px solid white;
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
                <div className="post-title">{title}</div>
            </PostContainer>
        </Link>
    )
}