import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const isAuthenticated = sessionStorage.getItem("token");

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return children;
};

export default AuthRoute;
