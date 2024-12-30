import axios from "axios";

const api = "http://localhost:8080";

export const aiChat = async (text: string) => {
    try {
        const response = await axios.post(
            `${api}/assistance-student`,
            { text },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.data.toString());

        return response.data.toString();
    } catch (error: any) {
        return error.response?.data?.toString() || "Erro desconhecido";
    }
};
