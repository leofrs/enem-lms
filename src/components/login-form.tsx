import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogIn } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(3, "Senha deve ter pelo menos 3 caracteres"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log(data);
        sessionStorage.setItem("token", "123456");
        navigate("/student-home");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md p-2">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Bem vindo!</CardTitle>
                    <CardDescription className="text-center">
                        Coloque suas credencias para acessar o sistema
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input {...register("email")} placeholder="john@doe.com" type="email" />
                            {errors.email && <p className=" text-sm text-red-400">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    {...register("password")}
                                    placeholder="******"
                                    type={showPassword ? "text" : "password"}
                                />
                                {errors.password && <p className=" text-sm text-red-400">{errors.password.message}</p>}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            <LogIn className="mr-2 h-4 w-4" /> Entrar
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    {/* <div className="relative my-4 w-full">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                            Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            GitHub
                        </Button>
                    </div> */}
                    <div className="text-center text-sm text-gray-500 mt-4">
                        Ainda não possui uma conta?{" "}
                        <a href="register" className="font-semibold text-blue-600 hover:text-blue-800">
                            Cadastre-se
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginForm;
