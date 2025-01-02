import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const materialStudy = [
    {
        id: 1,
        name: "Material 1",
        description: "Description 1",
        link: "https://example.com/material1",
    },
    {
        id: 2,
        name: "Flashcards ",
        description: "Description 2",
        link: "https://example.com/material2",
    },
    {
        id: 3,
        name: "Quiz",
        description: "Description 3",
        link: "https://example.com/material3",
    },
    {
        id: 4,
        name: "Questões/Respostas",
        description: "Description 4",
        link: "https://example.com/material4",
    },
];

const Material = () => {
    return (
        <div>
            <div className="mx-10 mt-4">
                <div className="flex flex-wrap gap-5 items-center justify-around p-10 border shadow-md rounded-lg w-full">
                    <img src="#" alt="Image here" className="w-[70px] h-[70px]" />
                    <div>
                        <h2 className="text-2xl font-bold">Course Name</h2>
                        <p>sumary</p>
                    </div>
                    <div>
                        <ul>
                            <li className="cursor-pointer">Material 1</li>
                            <li className="cursor-pointer">Material 2</li>
                            <li className="cursor-pointer">Material 3</li>
                            <li className="cursor-pointer">Material 4</li>
                            <li className="cursor-pointer">Material 5</li>
                            <li className="cursor-pointer">Material 6</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-5">
                    <div>
                        <h2 className="font-medium text-2xl">Material para estudo</h2>

                        <div className="w-full flex gap-4 items-center justify-between mt-4">
                            {materialStudy.map((material) => {
                                const { id, name, description, link } = material;
                                const handleClick = (text: string) => {
                                    window.open(text, "_blank");
                                };
                                return (
                                    <Card key={id} className="w-[200px]">
                                        <CardHeader>
                                            <CardTitle>{name}</CardTitle>
                                            <CardDescription>{description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button onClick={() => handleClick(link)}>Continue</Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-medium text-2xl">Material para estudo by AI</h2>

                        <Card
                            //key={item.id}
                            className="hover:shadow-lg transition-shadow cursor-pointer mt-4 md:0"
                            //onClick={() => handleNavigate(item.link)}
                        >
                            <CardContent className="flex items-center p-6 space-x-4">
                                <div>
                                    <h3 className="text-lg font-semibold">title</h3>
                                    <p className="text-sm text-muted-foreground">description</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Material;
