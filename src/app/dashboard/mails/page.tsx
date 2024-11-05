import { cookies } from "next/headers";
import Image from "next/image";

import { accounts, mails } from "@/components/shadcn/emails/data";
import { Mail } from "@/components/shadcn/emails/mail";

export default async function Page() {
    const layout = (await cookies()).get("react-resizable-panels:layout:mail");
    const collapsed = (await cookies()).get("react-resizable-panels:collapsed");

    const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
    const defaultCollapsed = collapsed
        ? JSON.parse(collapsed.value)
        : undefined;

    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                    <div className="w-full h-full p-4">
                        <div className="md:hidden">
                            <Image
                                src="/examples/mail-dark.png"
                                width={1280}
                                height={727}
                                alt="Mail"
                                className="hidden dark:block"
                            />
                            <Image
                                src="/examples/mail-light.png"
                                width={1280}
                                height={727}
                                alt="Mail"
                                className="block dark:hidden"
                            />
                        </div>
                        <div className="hidden flex-col md:flex">
                            <Mail
                                accounts={accounts}
                                mails={mails}
                                defaultLayout={defaultLayout}
                                defaultCollapsed={defaultCollapsed}
                                navCollapsedSize={4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
