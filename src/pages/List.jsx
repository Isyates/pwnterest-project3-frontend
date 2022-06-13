//import Link for use in array map to display Show page
import { Link } from "react-router-dom"
//import Post component
import Post from "../components/Post"
import styled from "styled-components"

//container
const ListContainer = styled.div`
// margin: 15px;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1em;
a{
    text-decoration: none;
}
`

export default function List({ posts }) {
    const loaded = () => {
        return (
            <ListContainer>
                {posts.map((post, idx) => {
                    return (
                        // <Link to={`${post._id}/show`} key={idx}>
                        //         <img src={post.img} alt={post.title} />
                        //         {post.title}
                        // </Link>
                        <Post post={post}/>
                    )
                }).reverse()}
            </ListContainer>
        )
    }
    const loading = () => <h1>loading...</h1>
    return (posts) ? loaded() : loading()

}
