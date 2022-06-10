import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="header">
            <Link to="/" clsssName="logo">Pwnterest</Link>
            <Link to="/create" className="createBtn"><button>Create Post</button></Link>
        </nav>
    )
}