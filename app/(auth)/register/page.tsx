"use client";

import { Input } from "@/components/ui/input";
import { register } from "@/lib/api";
import Link from "next/link";
import React, { useId, useState } from "react";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const idNom = useId();
  const idEmail = useId();
  const idPassword = useId();
  const idPassword2 = useId();

  const registerSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await register(username, email, password);
      // faire savoir à l'utilisateur que l'inscription a réussi
      console.log(data);
      // enlever l'affichage console
      window.location.href = "/login";
    } catch (error) {
      alert("Erreur lors de l'inscription réessayez");
      // mieux afficher les erreur à l'utilisateur pour qu'il respecte les règles d'inscription
    }
  };
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <p className="text-2xl">Créer un compte</p>
        <p className="text-foreground/70">Réjoignez la communauté !</p>
      </div>
      <form action="" className="space-y-4" onSubmit={registerSubmit}>
        <div className="grid gap-2">
          <label htmlFor={idNom}>Nom utilisateur</label>
          <Input
            type="text"
            id={idNom}
            placeholder="lunyouser"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idEmail}>Email</label>
          <Input
            type="email"
            id={idEmail}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="user@gmail.com"
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idPassword}>Mot de passe</label>
          <Input
            type="password"
            id={idPassword}
            minLength={4}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="........"
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idPassword2}>Confirmer le mot de passe</label>
          <Input
            type="password"
            id={idPassword2}
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            placeholder="........"
            className="h-10"
          />
        </div>
        <div className="grid justify-center pt-4 space-y-4">
          <Input
            type="submit"
            value="S'inscrire"
            className="w-56 h-10 bg-primary text-primary-foreground font-semibold"
          />
          <div className="space-x-2 text-center">
            <span>Déjà un compte ?</span>
            <Link href="/login" className="text-primary">
              Se connecter
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
