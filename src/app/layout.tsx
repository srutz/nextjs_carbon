import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react"

const inter = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextJS and Carbon",
    description: "The same as the title",
}


export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav>
                    Hello
                </nav>
                <main>
                    {props.children}
                </main>
            </body>
        </html>
    );
}
