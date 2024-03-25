import SignUp from "../Features/Auth/SignUp";
import Login from "../Features/Auth/Login";
export const Routes = [
    {
        path: "/sign-up",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]