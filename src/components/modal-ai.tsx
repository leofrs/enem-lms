import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import FormAi from "./form-ai";
import { useEffect, useState } from "react";

const ModalAi = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Olá! Me chamo Enem AI. Me pergunte qualquer coisa sobre os seus estudos!", type: "ai" },
    ]);

    const [isLoading, setIsLoading] = useState(false);
    const getQuestion = sessionStorage.getItem("text");

    useEffect(() => {
        setIsLoading(true);
        if (getQuestion !== null) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, text: getQuestion!, type: "user" },
            ]);
        }
        setIsLoading(false);
    }, [getQuestion]);

    return (
        <Dialog>
            <DialogTrigger>Pergunte a A.I</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className="max-w-4xl mx-auto p-4  flex flex-col">
                            <div className="bg-blue-600 text-white p-6 rounded-t-lg">
                                <h1 className="text-2xl font-bold mb-2">Enem A.I Assistence</h1>
                                <p className="text-blue-100">Seu tutor pessoal</p>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-lg ${
                                            message.type === "user"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-800 shadow-sm"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                                </div>
                            )}
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        <FormAi />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ModalAi;
