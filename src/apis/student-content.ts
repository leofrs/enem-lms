import axios from "axios";

const api = "http://localhost:8080";

export const StudentContent = async (userId: number) => {
    try {
        const response = await axios.get(`${api}/allContent`, {
            params: { studentId: userId },
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data.subjects;
    } catch (error: any) {
        return error.response?.data?.toString() || "Erro desconhecido";
    }
};
