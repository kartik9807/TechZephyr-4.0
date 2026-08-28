
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "TechZephyr",
    description: "TechZephyr website",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${lexend.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider>
                    {children}

                    <Navbar />

                    <ThemeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}