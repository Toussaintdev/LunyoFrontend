import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function AppRightbar() {
  return (
    <div className="space-y-8 h-screen flex-col py-4">
      <div className="space-y-4 px-4 bg-background max-h-1/2 overflow-scroll scrollbar-none rounded-2xl">
        <h1 className=" font-bold sticky top-0 z-10 bg-background pt-4">
          Suggestion
        </h1>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <div key={i} className="flex justify-between">
              <div key={i} className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
                <span className="text-left truncate">
                  <p className="font-bold">Toussaintdev</p>
                  <p>tou@gmail.com</p>
                </span>
              </div>
              <Button className="">Suivre</Button>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="space-y-4 px-4 max-h-1/2 overflow-scroll scrollbar-none bg-background rounded-2xl">
        <h1 className=" font-bold sticky top-0 bg-background pt-4">
          Tendances
        </h1>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <div key={i}>
              <p className="font-semibold">#Developpement</p>
              <p>12.5 publications</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
