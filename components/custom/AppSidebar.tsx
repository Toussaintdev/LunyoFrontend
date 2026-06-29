"use client";
import { Icon, LogIn, LogInIcon, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NAV_LINKS } from "@/constants/nav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProfilInterface, UserInterface } from "@/types/types";
import { getProfil, getUser } from "@/lib/api";

export default function AppSidebar() {
  const [profil, setProfil] = useState<ProfilInterface>();
  const [user, setUser] = useState<UserInterface>();
  const [findProfil, setFindProfil] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState("Accueil");

  // trouver le profil de l'utilisateur
  useEffect(() => {
    const fetchProfil = async () => {
      try {
        const data: ProfilInterface = await getProfil();
        setProfil(data);
        setFindProfil(true);
      } catch {}
    };
    fetchProfil();
  }, []);

  // trouver les infos de l'utilisateur
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (profil) {
          const data: UserInterface = await getUser(profil.user);
          setUser(data);
        }
      } catch {
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [findProfil]);

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <div className="flex gap-4 justify-baseline items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>LY</AvatarFallback>
          </Avatar>
          <span className="text-3xl font-bold group-data-[collapsible=icon]:hidden">
            <span className="text-primary">LUN</span>
            <span>YO</span>
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {NAV_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.label} className="">
                  <SidebarMenuButton
                    asChild
                    className={`p-6 font-semibold ${clicked == item.label ? "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground" : "hover:bg-secondary hover:text-secondary-foreground"} `}
                    onClick={() => setClicked(item.label)}
                  >
                    <Link href={item.href}>
                      <Icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        {loading ? (
          <p>Chargement...</p> // a changer en chose gris
        ) : user && profil ? (
          <Button className="gap-4 p-8 bg-accent text-foreground hover:bg-accent hover:text-accent-foreground group-data-[collapsible=icon]:rounded-full group-data-[collapsible=icon]:p-5">
            <Avatar>
              {profil.photo ? (
                <AvatarImage src={profil.photo} />
              ) : (
                <AvatarImage src="https://github.com/shadcn.png" />
              )}

              <AvatarFallback>
                {user.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-left truncate group-data-[collapsible=icon]:hidden">
              <p className="font-bold">{user.username}</p>
              <p>{user.email}</p>
            </span>
          </Button>
        ) : (
          <div className="text-center">
            <Link href="/login">
              <Button className="p-5 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:rounded-full">
                <LogIn />
                <span className="group-data-[collapsible=icon]:hidden">
                  Connectez-vous
                </span>
              </Button>
            </Link>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
