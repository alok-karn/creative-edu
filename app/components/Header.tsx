"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Art", href: "/curriculum/art" },
    { name: "Drama", href: "/curriculum/drama" },
    { name: "STEM", href: "/curriculum/stem" },
    { name: "Music", href: "/curriculum/music" },
    { name: "References", href: "/references" },
];

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full md:bg-background/95 backdrop-blur md:supports-[backdrop-filter]:bg-background/60 px-8">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            CreativeEdu
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-lime-700",
                                    pathname === item.href
                                        ? "text-lime-700 font-bold"
                                        : "text-foreground/60"
                                )}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <button
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    aria-controls="radix-:R1mcq:"
                    data-state={isOpen ? "open" : "closed"}
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5">
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </button>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
                        <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 text-popover-foreground shadow-md">
                            <Link
                                href="/"
                                className="flex items-center space-x-2">
                                <span className="font-bold">CreativeEdu</span>
                            </Link>
                            <nav className="grid grid-flow-row auto-rows-max text-sm">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                                            pathname === item.href
                                                ? "text-foreground"
                                                : "text-foreground/60"
                                        )}>
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;
