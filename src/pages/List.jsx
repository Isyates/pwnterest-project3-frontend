//import Link for use in array map to display Show page
 import { Link } from "react-router-dom"
//import Post component
import Post from "../components/Post"
//props are going to be posts state (array)


  {/* //loading/loaded */}

        {/* //maps posts array */}
        {/* key={post._id} */}
         {/* id={post._id} */}
        {/* title={post.title} */}
         {/* img={post.img} */}
       
export default function List({posts}) {
    const loaded = () => {
        return posts.map((post, idx) => {
            return <Link to={`${post._id}/show`} key={idx}>
                <div>
                <img src={post.img} alt={post.title}/>
                {post.title}
                </div>
            </Link>
        })
    }
    const loading = () => <h1>loading...</h1>
    return (posts) ? loaded() : loading()
    
}
