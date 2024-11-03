import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import CardsInformation1 from "@/components/shadcn/dashboard/cards-information/cards-information1";
import CardsInformation4 from "@/components/shadcn/dashboard/cards-information/cards-information4";
import CardsInformation3 from "@/components/shadcn/dashboard/cards-information/cards-information3";
import CardsInformation2 from "@/components/shadcn/dashboard/cards-information/cards-information2";
import OverviewPage from "@/components/shadcn/dashboard/overview/overview-page";
import RecentSalesPage from "@/components/shadcn/dashboard/recent-sales/recent-sales-page";

export default function Page() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50"></div>
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                    <div className="w-full h-full p-4">
                        <Tabs defaultValue="overview" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="overview">
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger value="analytics" disabled>
                                    Analytics
                                </TabsTrigger>
                                <TabsTrigger value="reports" disabled>
                                    Reports
                                </TabsTrigger>
                                <TabsTrigger value="notifications" disabled>
                                    Notifications
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <CardsInformation1 />
                                    <CardsInformation2 />
                                    <CardsInformation3 />
                                    <CardsInformation4 />
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                    <OverviewPage />
                                    <RecentSalesPage />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}
