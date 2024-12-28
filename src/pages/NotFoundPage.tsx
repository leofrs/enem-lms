import { ChevronsRight } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="flex h-screen text-black items-center justify-center">
            <div className="text-center p-6 rounded-lg shadow-lg bg-opacity-70">
                <h1 className="text-6xl font-extrabold mb-4">404</h1>
                <p className="text-2xl font-semibold mb-6">Oops! Page not found.</p>
                <p className="text-xl mb-6">
                    We couldn't find the page you were looking for. It might have been moved or deleted.
                </p>
                <a
                    href="/"
                    className="px-6 py-3 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-200 transition flex items-center justify-center"
                >
                    <ChevronsRight /> <span> Voltar para a página inicial</span>
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
