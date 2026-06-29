"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUsers } from "@/lib/api";
import { UserInterface } from "@/types/types";
import { useEffect, useState } from "react";

export default function Feed() {
  const liste = Array.from({ length: 100 }, (_, i) => i);
  return (
    <div className="px-8 lg:px-10 space-y-3">
      {liste.map((i) => (
        <Card className="bg-background" key={i}>
          <CardHeader>
            <div className="flex gap-4 p-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <span className="text-left truncate">
                <p className="font-bold">Toussaintdev</p>
                <p>Publié il y a 2h</p>
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Mon premier poste. J'espère faire plein de connaissance.</p>
            <div className="flex justify-center">
              <img src="imgtestprime.png" alt="" className="" />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      ))}
    </div>
  );
}
