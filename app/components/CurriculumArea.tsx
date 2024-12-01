"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Palette, Book, Video, Star } from "lucide-react";
import confetti from "canvas-confetti";

interface Activity {
    ageGroup: string;
    title: string;
    description: string;
}

interface CurriculumAreaProps {
    title: string;
    introduction: string;
    perspectives: string;
    resources: string[];
    learningExamples: {
        [key: string]: string[];
    };
    creativeActivities: Activity[];
    ageGroupVideos: {
        [key: string]: string;
    };
    criticalReflection: string;
}

const CurriculumArea: React.FC<CurriculumAreaProps> = ({
    title,
    introduction,
    perspectives,
    resources,
    learningExamples,
    creativeActivities,
    ageGroupVideos,
    criticalReflection,
}) => {
    const [activeTab, setActiveTab] = useState(
        Object.keys(learningExamples)[0]
    );
    const [activeCreativeTab, setActiveCreativeTab] = useState(
        Object.keys(ageGroupVideos)[0]
    );
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (showConfetti) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
            setShowConfetti(false);
        }
    }, [showConfetti]);

    const handleTabChange = (tab: string, section: "learning" | "creative") => {
        if (section === "learning") {
            setActiveTab(tab);
        } else {
            setActiveCreativeTab(tab);
        }
        setShowConfetti(true);
    };

    return (
        <motion.div
            className="space-y-16 bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <motion.h1
                className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                {title}
            </motion.h1>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <Sparkles className="mr-2 text-yellow-500" /> Introduction
                </h2>
                <p className="text-lg">{introduction}</p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <Palette className="mr-2 text-green-500" /> Perspectives on
                    Creativity
                </h2>
                <p className="text-lg">{perspectives}</p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <Book className="mr-2 text-blue-500" /> Resources & Digital
                    Tools
                </h2>
                <ul className="list-none pl-5 space-y-2 text-lg">
                    {resources.map((resource, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}>
                            <Star className="mr-2 text-yellow-500" /> {resource}
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <Video className="mr-2 text-red-500" /> Learning Examples
                </h2>
                <div className="flex flex-wrap justify-center space-x-4 mb-6">
                    {Object.keys(learningExamples).map((ageGroup) => (
                        <motion.button
                            key={ageGroup}
                            className={`px-4 py-2 rounded-full mb-2 text-white font-bold transition-colors duration-300 ${
                                activeTab === ageGroup
                                    ? "bg-gradient-to-r from-pink-500 to-yellow-500"
                                    : "bg-gray-400 hover:bg-gray-500"
                            }`}
                            onClick={() =>
                                handleTabChange(ageGroup, "learning")
                            }
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            {ageGroup} years
                        </motion.button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={activeTab}
                        className="list-none pl-5 space-y-2 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}>
                        {learningExamples[activeTab].map((example, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}>
                                <Star className="mr-2 text-yellow-500" />{" "}
                                {example}
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <Palette className="mr-2 text-purple-500" /> Creative
                    Learning Opportunities
                </h2>
                <div className="flex flex-wrap justify-center space-x-4 mb-6">
                    {Object.keys(ageGroupVideos).map((ageGroup) => (
                        <motion.button
                            key={ageGroup}
                            className={`px-4 py-2 rounded-full mb-2 text-white font-bold transition-colors duration-300 ${
                                activeCreativeTab === ageGroup
                                    ? "bg-gradient-to-r from-purple-500 to-blue-500"
                                    : "bg-gray-400 hover:bg-gray-500"
                            }`}
                            onClick={() =>
                                handleTabChange(ageGroup, "creative")
                            }
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            {ageGroup} years
                        </motion.button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCreativeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}>
                        {/* <video
                            controls
                            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6">
                            <source
                                src={ageGroupVideos[activeCreativeTab]}
                                type="video/mp4"
                            />
                            <track
                                kind="captions"
                                src={`/captions/${activeCreativeTab}.vtt`}
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video> */}

                        <iframe
                            src={ageGroupVideos[activeCreativeTab]}
                            width="560"
                            height="315"
                            frameborder="0"
                            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen; accelerometer"
                            allowFullScreen
                            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6"></iframe>
                        {creativeActivities
                            .filter(
                                (activity) =>
                                    activity.ageGroup === activeCreativeTab
                            )
                            .map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-6 bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-lg shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}>
                                    <h3 className="text-2xl font-semibold mb-2 text-purple-600">
                                        {activity.title}
                                    </h3>
                                    <p className="text-lg">
                                        {activity.description}
                                    </p>
                                </motion.div>
                            ))}
                    </motion.div>
                </AnimatePresence>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 flex items-center">
                    <Book className="mr-2 text-indigo-500" /> Critical
                    Reflection
                </h2>
                <p className="text-lg">{criticalReflection}</p>
            </motion.section>

            <motion.div
                className="fixed bottom-4 right-4 bg-yellow-400 text-white p-4 rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowConfetti(true)}
                aria-label="Launch confetti">
                <Sparkles size={24} />
            </motion.div>
        </motion.div>
    );
};

export default CurriculumArea;
