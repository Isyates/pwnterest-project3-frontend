//import Link for use in hitting Show route
import { Link } from "react-router-dom"

//this is the "card"
//this Component displays within List
//is rendered by the map of posts array in List page

export default function Post({ key, id, title, img }) {
    return (
        <Link key={key} className="post" to={`/post/${id}`}>
            <div key={key} className="post">
                {/* //entire thing is basically a Link to show route */}
                {/* //displays image, displays title, Link is to Show route with id */}
                <img src={img} alt="image" className="post-image" />
                <div className="post-title">{title}</div>
            </div>
        </Link>
    )
}