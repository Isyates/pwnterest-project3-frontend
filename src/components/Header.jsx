//import Link (for use to hit the List route and New route)
import { Link } from "react-router-dom"
export default function Header() {
    return <div className="header">
        
        {/* //Image on left side with Link to list route */}
        <Link to="/" className="logo"></Link>
        {/* // + on right side with Link to create route */}
        <Link to="/create" className="createBtn"><button>Create Post</button></Link>
    </div>
}


