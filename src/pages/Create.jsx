//import useNavigate to redirect after submit
import { useNavigate } from "react-router-dom"
import { useState } from "react"
//prop is going to be createPost function

export default function Create({ createPost }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        img: "",
        title: "",
    })

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // todo: Logic to check if vaild url
        // todo: Handle error first
        // todo: Return form to be created
        createPost(form)
        setForm({
            img: "",
            title: ""
        })
        navigate("/")
    }

    return <div className="create">

        {/* //form with handlechange handlesubmit */}
        <form onSubmit={handleSubmit}>
            <legend>Create New Post</legend>
            <input 
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
                minLength="1"
                maxLength="35"
            />
            <input 
                type="url"
                name="img"
                placeholder="Image"
                value={form.img}
                onChange={handleChange} 
            />
            <button type="submit">Add Post</button>
        </form>
    </div>

}
