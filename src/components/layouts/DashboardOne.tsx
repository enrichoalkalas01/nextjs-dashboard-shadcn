import * as React from "react";
import { AppSidebar } from "@/components/shadcn/sidebar-main/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/shadcn/ui/sidebar";
import HeadersDashboard from "../headers/headers-dashboard";

interface PropsDashboardOne {
    children: React.ReactNode;
}

export default function DashboardOne({ children }: PropsDashboardOne) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <HeadersDashboard />
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}
