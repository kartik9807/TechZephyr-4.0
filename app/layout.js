
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
            data-scroll-behavior="smooth"
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
                                    var isDark = saved === 'dark';
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
                <ThemeProvider defaultTheme="light">
                    {children}

                    <Navbar />

                    <ThemeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}