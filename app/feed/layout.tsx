import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSidebar";
import { Card } from "@/components/ui/card";
import AppRightbar from "@/components/custom/AppRightbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="grid lg:grid-cols-3 w-full h-full">
          <main className="lg:col-span-2 w-full max-h-lvh">
            <Card className="h-full rounded-r-none overflow-y-auto scrollbar-none pt-0">
              <div className="flex sticky top-0 z-10 bg-card">
                <SidebarTrigger />
              </div>
              {children}
            </Card>
          </main>
          <Card className="hidden lg:block rounded-none p-4">
            <AppRightbar />
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
