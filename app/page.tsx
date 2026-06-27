import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function page() {
  return (
    <div className="space-y-8">
      <Card />
      <div className="px-4 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center">
            <p className="text-5xl">
              Bienvenue sur <span className="text-blue-500">Lunyo</span>,un
              univers social connecté.
            </p>
            <p></p>
          </div>
          <ul>
            <li>Connectez-vous</li>
            <li>Publiez du contenu</li>
            <li>Interagir à des posts</li>
            <li>Discuter en temps réel</li>
            <li>Suivre d'autres utilisateurs</li>
          </ul>
          <div className="grid grid-cols-3">
            <div>
              <Link href="/register">
                <Button>Inscrivez vous</Button>
              </Link>
            </div>
            <div>
              <Link href="/login">
                <Button>Connectez vous</Button>
              </Link>
            </div>
            <div>
              <Link href="/feed">
                <Button>Accédez au feed</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
