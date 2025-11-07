"use client";
import React, { useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Detect saved or system theme
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    // Listen to system changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <header className="flex justify-between items-center p-4 border-b border-[var(--border)]">
        <h1 className="text-xl font-bold">🌗 Advanced Theme (TS)</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--accent)] transition-transform duration-200 hover:-translate-y-1 shadow-md"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main className="p-6 space-y-6">
        {children || <DemoContent />}
      </main>
    </div>
  );
};

export default ThemeProvider;

/* -------------------------------------------------------------------------- */
/*                               Demo Components                              */
/* -------------------------------------------------------------------------- */

interface CardProps {
  title: string;
  accent?: boolean;
  children: ReactNode;
}

const DemoContent: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Primary Card">
        This card adapts automatically to the current theme using CSS variables.
      </Card>
      <Card title="Accent Card" accent>
        You can mix Tailwind classes and theme variables together easily.
      </Card>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, children, accent = false }) => {
  return (
    <div
      className={`p-6 rounded-[var(--radius)] shadow-md border border-[var(--border)] ${
        accent
          ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
          : "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
};
