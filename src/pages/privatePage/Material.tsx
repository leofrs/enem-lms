import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StudentContent } from "@/apis/student-content";

const Material = () => {
    const { disciplineId } = useParams();

    const [content, setContent] = useState<any[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                if (disciplineId === undefined) {
                    throw new Error("disciplineId is undefined");
                }

                const response = await StudentContent(parseInt(disciplineId));

                const foundContent = await response
                    .flatMap((subject: any) => subject.disciplines)
                    .find((discipline: any) => discipline.id === parseInt(disciplineId));

                if (foundContent) {
                    setContent(foundContent.content || []);
                }
            } catch (error) {
                console.error("Erro ao buscar o conteúdo:", error);
            }
        };

        fetchContent();
    }, [disciplineId]);

    return (
        <div>
            <div className="mx-10 mt-4">
                <div className="mt-5">
                    <div>
                        <h2 className="font-medium text-2xl">Material para estudo</h2>

                        <div className="w-full flex gap-4 items-center justify-between mt-4">
                            {content.length > 0 ? (
                                content.map((material: any) => {
                                    const {
                                        title,
                                        material: materialText,
                                        quiz,
                                        flashcard,
                                        questionAndAnswer,
                                    } = material;

                                    return (
                                        <Card
                                            key={material.id}
                                            className="w-[250px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                                        >
                                            <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
                                                <CardTitle className="text-xl font-semibold text-gray-800">
                                                    {title}
                                                </CardTitle>
                                                <CardDescription className="text-sm text-gray-600 mt-2">
                                                    {materialText}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid grid-cols-2 gap-2 p-4">
                                                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                                                    Material
                                                </Button>
                                                <Button className="w-full bg-green-500 text-white hover:bg-green-600 transition duration-300">
                                                    Quiz
                                                </Button>
                                                <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">
                                                    Flashcard
                                                </Button>
                                                <Button className="w-full bg-red-500 text-white hover:bg-red-600 transition duration-300">
                                                    Simulado
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    );
                                })
                            ) : (
                                <p>Sem materiais disponíveis.</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-medium text-2xl">Material para estudo by AI</h2>

                        <Card
                            //key={title}
                            className="w-[250px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mt-10"
                        >
                            <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
                                <CardTitle className="text-xl font-semibold text-gray-800">title</CardTitle>
                                <CardDescription className="text-sm text-gray-600 mt-2">materialText</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-2 p-4">
                                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                                    Material
                                </Button>
                                <Button className="w-full bg-green-500 text-white hover:bg-green-600 transition duration-300">
                                    Quiz
                                </Button>
                                <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">
                                    Flashcard
                                </Button>
                                <Button className="w-full bg-red-500 text-white hover:bg-red-600 transition duration-300">
                                    Simulado
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Material;
