import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { aiChat } from "@/apis/ai-chat";
import useAIChat from "@/hooks/use-aiChat";

const schema = z.object({
    text: z.string().max(100, { message: "Máximo de 100 caracteres" }).nullable(),
});

type FormData = z.infer<typeof schema>;

const FormAi = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { isLoading, setIsLoading } = useAIChat();

    const onSubmit = async (data: FormData) => {
        const { text } = data;

        if (!text) {
            alert("Digite algo");
            return;
        }

        try {
            setIsLoading(true);
            const response = await aiChat(text);
            console.log(response);
        } catch (error) {
            alert("Error encontrado" + error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ text: "" });
        }
    }, [formState, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white border-t">
            <div className="flex gap-4">
                <Input {...register("text")} placeholder="Inicio e termino da segunda guerra mundial?" type="text" />
                {errors.text && <p className=" text-sm text-red-400">{errors.text.message}</p>}
                <Button
                    type="submit"
                    className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
                >
                    {isLoading ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
                </Button>
            </div>
        </form>
    );
};

export default FormAi;
