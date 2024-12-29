import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import FormAi from "./form-ai";

const ModalAi = () => {
    return (
        <Dialog>
            <DialogTrigger>Pergunte a A.I</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormAi />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ModalAi;
