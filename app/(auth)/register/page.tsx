"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useId, useState } from "react";

export default function Register() {
  const username = useState(null);
  const email = useState(null);
  const password = useState(null);
  const password2 = useState(null);
  const idNom = useId();
  const idEmail = useId();
  const idPassword = useId();
  const idPassword2 = useId();
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <p className="text-2xl">Créer un compte</p>
        <p className="text-foreground/70">Réjoignez la communauté !</p>
      </div>
      <form action="" className="space-y-4">
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
          <label htmlFor={idEmail}>Email</label>
          <Input
            type="email"
            id={idEmail}
            placeholder="user@gmail.com"
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idPassword}>Mot de passe</label>
          <Input
            type="password"
            id={idPassword}
            minLength={8}
            placeholder="........"
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={idPassword2}>Confirmer le mot de passe</label>
          <Input
            type="password"
            id={idPassword2}
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
