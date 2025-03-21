import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "My Chatbot - sign up",
};

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
