import { RouterProvider } from "react-router-dom";
import { router } from "../../router";

export default function Testrouter() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}