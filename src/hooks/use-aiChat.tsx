import { useState } from "react";

const useAIChat = () => {
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return { text, setText, isLoading, setIsLoading };
};

export default useAIChat;
