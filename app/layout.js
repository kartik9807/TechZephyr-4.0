
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
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var saved = localStorage.getItem('techzephyr-theme');
                                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    var isDark = saved === 'dark' || (saved !== 'light' && prefersDark);
                                    if (isDark) {
                                        document.documentElement.classList.add('dark');
                                        document.documentElement.classList.remove('light');
                                        document.documentElement.setAttribute('data-theme', 'dark');
                                    } else {
                                        document.documentElement.classList.add('light');
                                        document.documentElement.classList.remove('dark');
                                        document.documentElement.setAttribute('data-theme', 'light');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <ThemeProvider>
                    {children}

                    <Navbar />

                    <ThemeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}