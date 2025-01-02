import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const data = [
    {
        id: 1,
        title: "Português",
        description: "Descrição aqui",
        icon: <FileText className="h-8 w-8 text-blue-500" />,
        link: "material/portugues",
    },
    {
        id: 2,
        title: "Literatura",
        description: "Descrição aqui",
        icon: <FileText className="h-8 w-8 text-blue-500" />,
        link: "material/literatura",
    },
    {
        id: 3,
        title: "Artes",
        description: "Descrição aqui",
        icon: <FileText className="h-8 w-8 text-blue-500" />,
        link: "material/artes",
    },
    {
        id: 4,
        title: "Educação Física",
        description: "Descrição aqui",
        icon: <FileText className="h-8 w-8 text-blue-500" />,
        link: "material/educacao-fisica",
    },
    {
        id: 5,
        title: "Tecnologia da Informação",
        description: "Descrição aqui",
        icon: <FileText className="h-8 w-8 text-blue-500" />,
        link: "material/tecnologia-da-informacao",
    },
    {
        id: 6,
        title: "Língua Estrangeira",
        description: "Descrição aqui",
        icon: <FileText className="h-8 w-8 text-blue-500" />,
        link: "material/lingua-estrangeira",
    },
];

const LinguagemCodigosTecnologias = () => {
    const navigate = useNavigate();
    const handleNavigate = (link: string) => {
        navigate(link);
    };

    const url = useLocation();
    const isActive = url.pathname.includes("material");

    return (
        <>
            {isActive ? (
                <Outlet />
            ) : (
                <div className="overflow-y-auto max-h-[750px]">
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            className="hover:shadow-lg transition-shadow cursor-pointer mt-4 md:0"
                            onClick={() => handleNavigate(item.link)}
                        >
                            <CardContent className="flex items-center p-6 space-x-4">
                                {item.icon}
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default LinguagemCodigosTecnologias;
