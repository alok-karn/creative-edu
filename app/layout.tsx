"use client";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
    title: "Fostering Creativity in Early Childhood Education",
    description:
        "A comprehensive guide for early childhood teachers on facilitating creativity within the curriculum",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body className={`${inter.className} flex min-h-screen flex-col`}>
                <Header />
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-grow container mx-auto px-4 py-8">
                        {children}
                    </motion.div>
                    {/* <motion.div className="flex-grow container mx-auto px-4 py-8">
                        {children}
                    </motion.div> */}
                </AnimatePresence>
            </body>
        </html>
    );
}
