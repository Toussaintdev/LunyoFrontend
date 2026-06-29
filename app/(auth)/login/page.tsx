"use client";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/api";
import Link from "next/link";
import { useId, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const idNom = useId();
  const idPassword = useId();

  const loginSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      console.log(data);
      console.log(`${username} ${password}`);
      // enlever l'affichage console
      window.location.href = "/feed";
    } catch (error) {
      alert("Erreur lors de la connexion réessayez");
      // mieux afficher les erreur à l'utilisateur pour qu'il respecte les règles d'inscription
    }
  };
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <p className="text-2xl font-semibod">Bienvenue !</p>
        <p className="text-foreground/70">Connecter-vous à votre compte</p>
      </div>
      <form action="" className="space-y-8" onSubmit={loginSubmit}>
        <div className="grid gap-2">
          <label htmlFor={idNom}>Nom utilisateur</label>
          <Input
            type="text"
            id={idNom}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="lunyouser"
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idPassword}>Password</label>
          <Input
            type="password"
            id={idPassword}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="........"
            className="h-10"
          />
        </div>
        <div className="grid justify-center pt-4 space-y-4">
          <Input
            type="submit"
            value="Se connecter"
            className="w-56 h-10 bg-primary text-primary-foreground"
          />
          <div className="space-x-2 text-center">
            <span>Pas de compte ?</span>
            <Link href="/register" className="text-primary">
              S'inscrire
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
