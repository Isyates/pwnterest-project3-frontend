//import Link for displaying Edit route
import { useParams, Link} from 'react-router-dom'


export default function Show(props) {
    const {id} = useParams() //found ID from paramaters
    const loaded = () => {

        const posts = props.posts // changed posts into variable inside file
        const post = posts.find((displayedPost) => displayedPost._id === id) //found the selected post and assigned it to post

        return <div className="show">
        
    {/* returns the img, title and the link to the edit page */}
        <img src={post.img} alt={post.title}/>
    <div className='showBottom'>
        <h1>{post.title}</h1>
        <Link to={`/${id}/edit`}>Edit</Link>
    </div>
        {/* //props are the state (posts array) */}
        {/* //use req.params.id to forEach the array and find the post in question based on id */}
        {/* // props.posts.forEach() */}
        {/* //render this post */}
    </div>
    }

     const loading = () => <h1>Loading...</h1>
    return (props.posts) ? loaded() : loading()
}