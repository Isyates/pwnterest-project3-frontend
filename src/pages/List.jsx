//import Link for use in array map to display Show page
import { Link } from "react-router-dom"
//import Post component
import Post from "../components/Post"
import styled from "styled-components"

//container
const ListContainer = styled.div`
// margin: 15px;
// box-sizing: border-box;
display: grid;
grid-template-columns: calc(50% - .5em) calc(50% - .5em);
gap: 1em;
a{
    text-decoration: none;
}
`

const Spinner = styled.div`
display: flex;
height:100%;
justify-content: center;
align-items: center
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
    const loading = () => {return (<div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading"/>
    </div>)}
    return (posts) ? loaded() : loading()

}
