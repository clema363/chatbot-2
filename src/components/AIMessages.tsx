import { type Message as TMessage } from "@ai-sdk/react";
import { Message } from "./Message";
import { MessageSquare } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useRef } from "react";

interface MessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Faire défiler vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col space-y-4 p-4">
        {messages.length > 0 ? (
          <>
            {messages.map((message, i) => (
              <Message
                key={i}
                content={message.content}
                isUserMessage={message.role === "user"}
              />
            ))}
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 py-8">
            <MessageSquare className="size-8 text-blue-500" />
            <h3 className="text-xl font-semibold text-white">
              Vous êtes prêt !
            </h3>
            <p className="text-sm text-zinc-500">
              Posez votre première question pour commencer.
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};
