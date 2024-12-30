import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import books from "../../assets/books.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calculator, FlaskConical, Globe, FileCode } from "lucide-react";

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

const disciplinas = [
    {
        id: 1,
        title: "Linguagens, Códigos e suas Tecnologias",
        description: "Português, Literatura, Artes e Língua Estrangeira",
        icon: FileCode,
        url: "/student-home/linguagens-codigos-tecnologias",
    },
    {
        id: 2,
        title: "Matemática e suas Tecnologias",
        description: "Matemática, Álgebra, Geometria, Probabilidade e Estatística, Matemática Financeira, Funções",
        icon: Calculator,
        url: "/student-home/matematica-e-tecnologias",
    },
    {
        id: 3,
        title: "Ciencias da Natureza e suas Tecnologias",
        description: "Química, Física, Biologia e Meio Ambiente",
        icon: FlaskConical,
        url: "/student-home/ciencias-da-natureza-e-tecnologias",
    },
    {
        id: 4,
        title: "Ciencias Humanas e suas Tecnologias",
        description: "História, Geografia, Filosofia, Sociologia, Economia, Direito, Sociologia",
        icon: Globe,
        url: "/student-home/ciencias-humanas-e-tecnologias",
    },
];

const StudentHomePage = () => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };

    const handleCardClick = (url: string) => {
        navigate(url);
    };

    return (
        <>
            <div className="w-full bg-[#3170F1] rounded-xl flex gap-2 p-4 h-[90px]">
                <img src={books} alt="Book Image" className="w-16" />
                <div className="text-white">
                    <h1 className="md:text-base xl:text-xl">Bom ter você de volta, Leonardo Santos!</h1>
                    <p className="text-xs">Um objetivo sem um plano é apenas um sonho!</p>
                </div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.map((item) => {
                        const { id, title, description, link } = item;
                        return (
                            <div key={id} className="w-full flex justify-around items-center">
                                <Card className="w-full h-[200px] flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg ">
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

                <div className="grid grid-cols-1 gap-4 lg:gap-6 mt-8 h-[400px] ">
                    <div className="h-full overflow-y-auto px-2 pb-2">
                        {disciplinas.map((item) => {
                            const { id, title, description, icon: Icon, url } = item;
                            return (
                                <Card
                                    key={id}
                                    className="hover:shadow-lg transition-shadow cursor-pointer mt-4 md:0 "
                                    onClick={() => handleCardClick(url)}
                                >
                                    <CardContent className="flex items-center p-6 space-x-4">
                                        <div className="h-8 w-8 text-blue-500">
                                            <Icon className="h-full w-full" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{title}</h3>
                                            <p className="text-sm text-muted-foreground">{description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}{" "}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentHomePage;
