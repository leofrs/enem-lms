import Page from "@/app/dashboard/page";
import NotFoundPage from "@/pages/NotFoundPage";
import StudentHomePage from "@/pages/privatePage/StudentHomePage";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./authRoute";
import LoginPage from "@/pages/LoginPage";
import RegisterForm from "@/components/register-form";
import LinguagemCodigosTecnologias from "@/pages/privatePage/linguagensCodigosTecnologias";
import MatematicaETecnologias from "@/pages/privatePage/matematicaETecnologias";
import CienciasNatureza from "@/pages/privatePage/cienciasNatureza";
import CienciasHumanas from "@/pages/privatePage/cienciasHumanas";
import CreateWithAi from "@/pages/privatePage/CreateWithAi";
import Material from "@/pages/privatePage/Material";

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
            {
                path: "linguagens-codigos-tecnologias",
                element: <LinguagemCodigosTecnologias />,
                children: [
                    {
                        path: "material/:disciplineId",
                        element: <Material />,
                    },
                ],
            },
            {
                path: "matematica-e-tecnologias",
                element: <MatematicaETecnologias />,
            },
            {
                path: "ciencias-da-natureza-e-tecnologias",
                element: <CienciasNatureza />,
            },
            {
                path: "ciencias-humanas-e-tecnologias",
                element: <CienciasHumanas />,
            },
            {
                path: "create-with-ai",
                element: <CreateWithAi />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
