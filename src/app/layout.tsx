import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { ReactNode } from "react"
import { Navbar } from "@/components/Navbar"

const thefont = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextJS and Carbon",
    description: "The same as the title",
}


export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={thefont.className}>
                <Navbar></Navbar>
                <main>
                    {props.children}
                </main>
            </body>
        </html>
    );
}
