import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import books from "../../assets/books.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const data = [
    {
        id: 1,
        title: "Topicos mais abordados no ENEM",
        description:
            "Descubra quais são os tópicos mais recorrentes no ENEM e conheça as porcentagens de incidência de cada um nas provas.",
        link: "#",
    },
    {
        id: 2,
        title: "Redação nota 1000?",
        description:
            "A redação é uma das partes mais temidas por muitos candidatos, e esse tópico foca em técnicas específicas para produzir uma redação nota 1000.",
        link: "#",
    },
    {
        id: 3,
        title: "Como Estudar para o ENEM de Forma Eficiente?",
        description: "Preparar-se para o ENEM de maneira eficiente e saía na frente dos seus concorrentes. ",
        link: "#",
    },
];

const StudentHomePage = () => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };
    return (
        <>
            <div className="w-full bg-[#3170F1] rounded-xl flex gap-2 p-4 h-[90px]">
                <img src={books} alt="Book Image" className="w-16" />
                <div className="text-white">
                    <h1 className="text-xl">Bom ter você de volta, Leonardo Santos!</h1>
                    <p className="text-xs">A goal witout a plan is only a dream</p>
                </div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {data.map((item) => {
                        const { id, title, description, link } = item;
                        return (
                            <div key={id} className="w-full flex justify-around items-center">
                                <Card className="w-full h-[200px] flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
                                    <CardHeader>
                                        <CardTitle>{title}</CardTitle>
                                        <CardDescription>
                                            <p className="text-xs">{description}</p>
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter className="flex flex-col items-start">
                                        <Button onClick={() => handleClick(link)}>Saiba mais</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default StudentHomePage;
