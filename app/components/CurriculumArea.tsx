"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    implementationEvidence: {
        type: "video" | "timeline";
        src: string;
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
    implementationEvidence,
    criticalReflection,
}) => {
    const [activeTab, setActiveTab] = useState("0-2");

    return (
        <motion.div
            className="space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <motion.h1
                className="text-5xl font-bold text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                {title}
            </motion.h1>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-primary/20 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg">{introduction}</p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-secondary/20 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-4">
                    Perspectives on Creativity
                </h2>
                <p className="text-lg">{perspectives}</p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-tertiary/20 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-4">
                    Resources & Digital Tools
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                    {resources.map((resource, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}>
                            {resource}
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-quaternary/20 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-4">
                    Learning Examples
                </h2>
                <div className="flex flex-wrap justify-center space-x-4 mb-6">
                    {Object.keys(learningExamples).map((ageGroup) => (
                        <motion.button
                            key={ageGroup}
                            className={`px-4 py-2 rounded-full mb-2 ${
                                activeTab === ageGroup
                                    ? "bg-primary text-white"
                                    : "bg-gray-200"
                            }`}
                            onClick={() => setActiveTab(ageGroup)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            {ageGroup} years
                        </motion.button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={activeTab}
                        className="list-disc pl-5 space-y-2 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}>
                        {learningExamples[activeTab].map((example, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}>
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
                className="bg-quinary/20 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-4">
                    Creative Learning Opportunities
                </h2>
                {creativeActivities.map((activity, index) => (
                    <motion.div
                        key={index}
                        className="mb-6 bg-white p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}>
                        <h3 className="text-2xl font-semibold mb-2">
                            {activity.ageGroup} years: {activity.title}
                        </h3>
                        <p className="text-lg">{activity.description}</p>
                    </motion.div>
                ))}
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="bg-primary/20 p-6 rounded-
lg">
                <h2 className="text-3xl font-semibold mb-4">
                    Implementation Evidence
                </h2>
                {implementationEvidence.type === "video" ? (
                    <video
                        controls
                        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg">
                        <source
                            src={implementationEvidence.src}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image
                        src={implementationEvidence.src}
                        alt="Implementation Timeline"
                        width={800}
                        height={400}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                )}
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="bg-secondary/20 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-4">
                    Critical Reflection
                </h2>
                <p className="text-lg">{criticalReflection}</p>
            </motion.section>
        </motion.div>
    );
};

export default CurriculumArea;
