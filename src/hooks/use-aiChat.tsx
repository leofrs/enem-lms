import { useState } from "react";

const useAIChat = () => {
    const [text, setText] = useState<string>("Hello");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return { text, setText, isLoading, setIsLoading };
};

export default useAIChat;
