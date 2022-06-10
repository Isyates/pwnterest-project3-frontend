//import Routes Route useState useEffect

//import url for api from config

//posts, setPosts using setState

//functions to be created:
//getPosts to hit the api endpoint, will store API return as state (setState blah)
//createPost to POST to api
//updatePost(post, _id) takes req.body (post) and _id parameters
//deletePost(_id) takes _id parameter

//useEffect to setPosts with getPosts on page load



export default function Main() {

return <div className="main">

   {/* <Routes>
   <route path element
   <Route to edit needs update and delete
   <Route to show, id is from req.params, needs the posts state to reference to find the individual based on ID
   //on show page, you are going to have a forEach that runs against the array stored in state
   //forEach element in the array, if req.params.id = element._id, then use that particular element to render the show page
   <Route to create needs prop passed for createpost function for the form
   <Route for about page
</Routes> */}

   {/* //about link goes here somewhere */}
</div>
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
