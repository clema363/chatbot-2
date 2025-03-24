import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import Image from "next/image";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
  user?: {
    imageUrl?: string;
  };
}

export const Message = ({ content, isUserMessage, user }: MessageProps) => {
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isUserMessage ? "ms-5 justify-end" : "ms-5 justify-start",
      )}
    >
      {!isUserMessage && <Bot className="mr-2 shrink-0" />}
      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isUserMessage
            ? "bg-primary text-primary-foreground"
            : "bg-background",
        )}
      >
        {content}
      </p>
      {isUserMessage && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="User image"
          width={40}
          height={40}
          className="ml-2 rounded-full"
        />
      )}
    </div>
  );
};
