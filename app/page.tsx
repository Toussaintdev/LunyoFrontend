import { Card } from "@/components/ui/card";
import React from "react";

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
        </div>
      </div>
    </div>
  );
}
