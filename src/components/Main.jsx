//import Routes Route useState useEffect
import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CONFIG from "../config/apiEP"
import About from "../pages/About"
import Create from "../pages/Create"
import Edit from "../pages/Edit"
import List from "../pages/List"
import Show from "../pages/Show"

export default function Main() {
   //posts, setPosts using setState
   const [posts, setPosts] = useState(null)
   //import url for api from config
   const postsAPI = `${CONFIG.PROD.URL}`
   //functions to be created:
   //getPosts to hit the api endpoint, will store API return as state (setState blah)
   const getPosts = async () => {
      const data = await fetch(postsAPI, {
         method: "GET",
         headers: {
            "Content-Type": "Application/json"
         }
      }).then((res) => res.json())
      setPosts(data)
   }
   //createPost to POST to api
   const createPost = async (post) => {
      await fetch(postsAPI, {
         method: "POST",
         headers: {
            "Content-Type": "Application/json"
         },
         body: JSON.stringify(post)
      })
      getPosts()
   }
   //updatePost(post, _id) takes req.body (post) and _id parameters
   const updatePost = async (post, _id) => {
      await fetch(postsAPI + _id, {
         method: "PUT",
         headers: {
            "Content-Type": "Application.json"
         },
         body: JSON.stringify(post)
      })
      getPosts()
   }
   //deletePost(_id) takes _id parameter
   const deletePost = async (_id) => {
      await fetch(postsAPI + _id, {
         method: "DELETE",
         headers: {
            "Content-Type": "Application/json"
         }
      })
      getPosts()
   }
   //useEffect to setPosts with getPosts on page load
   useEffect(() => {getPosts()}, [])

   {/* <Routes>
   <route path element
   <Route to edit needs update and delete
   <Route to show, id is from req.params, needs the posts state to reference to find the individual based on ID
   //on show page, you are going to have a forEach that runs against the array stored in state
   //forEach element in the array, if req.params.id = element._id, then use that particular element to render the show page
   <Route to create needs prop passed for createpost function for the form
   <Route for about page
   </Routes> */}
   return (
      <div className="main">
         <Routes>
            <Route 
               path="/" 
               element={
               <List
                  posts={posts}
               />
            }/>
            <Route 
               path="/create" 
               element={
               <Create
                  createPost={createPost}
               />
            }/>
            <Route 
               path="/:id/edit" 
               element={
               <Edit
                  updatePost={updatePost}
                  deletePost={deletePost}
               />
            }/>
            <Route 
               path="/:id/show" 
               element={
               <Show
                  posts={posts}
               />
            }/>
            <Route 
               path="/about" 
               element={
               <About
               />
            }/>
         </Routes>
         <Link to="/about">About</Link>
   {/* //about link goes here somewhere */}
      </div>
   )
}




//=------------------
//notes

//aboutLink state
//if route=about
//state = true
//any other route
//sets state to false
{/* //based on aboutLinkState there is a ternary here */}
{/* ternary says if state=true, null display, else display the link  */}
{/* link will be a little Link with a className and the link will be something like a PNG thats round */}
{/* absolute positioning based on bottom-right corner of view window or something liek that  */}
