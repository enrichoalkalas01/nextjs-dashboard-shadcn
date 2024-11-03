import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card";
import { RecentSales } from "./recent-sales";

export default function RecentSalesPage() {
    return (
        <>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                        You made 265 sales this month.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RecentSales />
                </CardContent>
            </Card>
        </>
    );
}
