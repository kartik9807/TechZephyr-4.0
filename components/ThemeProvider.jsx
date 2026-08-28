"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("system");
    const [resolvedTheme, setResolvedTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("techzephyr-theme");

        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        } else {
            setTheme("system");
        }
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const updateSystemTheme = () => {
            if (theme === "system") {
                setResolvedTheme(mediaQuery.matches ? "dark" : "light");
            }
        };

        updateSystemTheme();

        mediaQuery.addEventListener("change", updateSystemTheme);

        return () => {
            mediaQuery.removeEventListener(
                "change",
                updateSystemTheme
            );
        };
    }, [theme]);

    useEffect(() => {
        const finalTheme =
            theme === "system"
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
                : theme;

        setResolvedTheme(finalTheme);

        document.documentElement.classList.remove(
            "light",
            "dark"
        );

        document.documentElement.classList.add(finalTheme);

        document.documentElement.setAttribute(
            "data-theme",
            finalTheme
        );

        localStorage.setItem(
            "techzephyr-theme",
            theme
        );
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => {
            if (current === "system") {
                return resolvedTheme === "dark"
                    ? "light"
                    : "dark";
            }

            return current === "dark"
                ? "light"
                : "dark";
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                resolvedTheme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}