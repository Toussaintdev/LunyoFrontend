import { Icon, Rocket, User } from "lucide-react";
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

export default function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <Button className="p-4">
          {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>LY</AvatarFallback>
          </Avatar> */}
          <span className="text-xl group-data-[collapsible=icon]:hidden">
            <span>LUN</span>
            <span>YO</span>
          </span>
        </Button>
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
                    className="p-6 font-semibold hover:bg-secondary hover:text-secondary-foreground"
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
        <Button className="gap-4 p-8 bg-background text-foreground hover:bg-accent hover:text-accent-foreground group-data-[collapsible=icon]:p-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>LY</AvatarFallback>
          </Avatar>
          <span className="text-left group-data-[collapsible=icon]:hidden">
            <p className="font-bold">Lunyo</p>
            <p>user@lunyo.com</p>
          </span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
