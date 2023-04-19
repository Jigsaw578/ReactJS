import { Outlet, createBrowserRouter } from "react-router-dom"
import PostDetails from "./Bai14/Test/post"

export const router = createBrowserRouter([
    {
        path: "/",
        element: (<div>
            <h2>Header layout</h2>
            <Outlet />
        </div>),
        children: [
            {
                path: "/",
                element: <div>HelloWorld</div>
            },
            {
                path: "/aboutUs",
                element: <div>About Us</div>
            },
            {
                path: "/post/:postId",
                element: <PostDetails></PostDetails>
            }
        ]
    }
])