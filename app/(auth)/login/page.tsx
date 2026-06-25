"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useId } from "react";

export default function Login() {
  const idNom = useId();
  const idPassword = useId();
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <p className="text-2xl font-semibod">Bienvenue !</p>
        <p className="text-foreground/70">Connecter-vous à votre compte</p>
      </div>
      <form action="" className="space-y-8">
        <div className="grid gap-2">
          <label htmlFor={idNom}>Nom utilisateur</label>
          <Input
            type="text"
            id={idNom}
            placeholder="lunyouser"
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idPassword}>Password</label>
          <Input
            type="password"
            id={idPassword}
            minLength={8}
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
