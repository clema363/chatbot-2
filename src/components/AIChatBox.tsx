import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { XCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Messages } from "./AIMessages";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    //handleChange,
    handleSubmit,
    setMessages,
  } = useChat({ api: "/api/chat-stream" });

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-hidden">
            <Messages messages={messages} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="sticky bottom-0 m-3 flex gap-1"
          >
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Entrez votre message"
              className="flex-1"
            />
            <Button type="submit">Envoyer</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
