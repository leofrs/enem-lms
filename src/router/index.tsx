import Page from "@/app/dashboard/page";
import HomePage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import StudentHomePage from "@/pages/StudentHomePage";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import LoginPage from "@/pages/LoginPage";
import RegisterForm from "@/components/register-form";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterForm />,
            },
        ],
    },
    {
        path: "/student-home",
        element: (
            <AuthRoute>
                <Page />
            </AuthRoute>
        ),
        children: [
            {
                index: true,
                element: <StudentHomePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
