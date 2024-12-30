import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const schema = z.object({
    text: z.string().max(100, { message: "Máximo de 100 caracteres" }),
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

    const onSubmit = (data: FormData) => {
        console.log(data);
        sessionStorage.setItem("text", data.text);
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
                    <Send size={20} />
                </Button>
            </div>
        </form>
    );
};

export default FormAi;
