"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import logowhite from "@/assets/logo-white.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";

export default function Navbar() {
  const { theme } = useTheme();
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            {theme === "dark" && (
              <Image
                src={logowhite}
                alt="MyChatbot Logo"
                width={40}
                height={40}
              />
            )}
            {theme !== "dark" && (
              <Image src={logo} alt="MyChatbot Logo" width={40} height={40} />
            )}
            <span className="font-bold">My Chatbot</span>
          </Link>
          <div className="itmes-center flex gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button onClick={() => setShowAddEditNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
