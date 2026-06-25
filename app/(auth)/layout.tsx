import { Card } from "@/components/ui/card";
import { Home, LogIn } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md py-16">
        <div>
          <p className="text-center text-4xl font-bold text-primary">Lunyo</p>
        </div>
        <div className="p-4">{children}</div>
      </Card>
    </main>
  );
}
