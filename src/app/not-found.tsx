import { Button } from "@/components/shadcn/ui/button";
import {
    Alert,
    AlertTitle,
    AlertDescription,
} from "@/components/shadcn/ui/alert";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="py-4 px-8">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                    <Alert variant="destructive" className="max-w-md">
                        <AlertTitle>404 - Page Not Found</AlertTitle>
                        <AlertDescription>
                            Oops! The page you're looking for doesn't exist. It
                            may have been moved or deleted.
                        </AlertDescription>
                    </Alert>
                    <Link href="/dashboard" passHref>
                        <Button variant="outline" className="mt-6">
                            Go Back To Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
