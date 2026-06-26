import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSidebar";
import { Card } from "@/components/ui/card";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* <SidebarTrigger className="lg:hidden" /> */}
        <div className="grid lg:grid-cols-5 w-full h-full">
          <main className="lg:col-span-4 w-full h-full">
            <Card>
              {/* header */}
              <SidebarTrigger className="md:hidden" />
            </Card>
            {children}
          </main>
          <Card className="hidden lg:block" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
