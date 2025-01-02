import { StudentContent } from "@/apis/student-content";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const LinguagemCodigosTecnologias = () => {
    const navigate = useNavigate();

    const url = useLocation();
    const isActive = url.pathname.includes("material");

    const [title, setTitle] = useState([]);

    useEffect(() => {
        try {
            const getAllContent = async () => {
                const getSessioUserId = sessionStorage.getItem("studentId");
                if (getSessioUserId) {
                    try {
                        const response = await StudentContent(parseInt(getSessioUserId));
                        const linguagensDisciplinas = response
                            .filter((res: any) => res.title === "linguagensCodigosETecnologias")
                            .map((res: any) => res.disciplines)
                            .flat();
                        setTitle(linguagensDisciplinas);
                    } catch (error) {
                        console.error("Erro ao obter conteúdo:", error);
                    }
                }
            };

            getAllContent();
        } catch (error) {
            console.log("Error encontered:", error);
        }
    }, []);

    const handleNavigate = (disciplineId: number) => {
        console.log(disciplineId);

        navigate(`material/${disciplineId}`);
    };

    return (
        <>
            {isActive ? (
                <Outlet />
            ) : (
                <div className="overflow-y-auto max-h-[750px]">
                    {title.map((item: any) => (
                        <Card
                            key={item.id}
                            className="hover:shadow-lg transition-shadow cursor-pointer mt-4 md:0"
                            onClick={() => handleNavigate(item.id)}
                        >
                            <CardContent className="flex items-center p-6 space-x-4">
                                <FileText />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    {/* <p className="text-sm text-muted-foreground">{item.description}</p> */}
                                </div>
                            </CardContent>
                        </Card>
                    ))}{" "}
                </div>
            )}
        </>
    );
};

export default LinguagemCodigosTecnologias;
