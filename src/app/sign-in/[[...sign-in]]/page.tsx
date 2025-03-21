import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "My Chatbot - sign in",
};

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
