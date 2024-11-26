"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

const MotionLink = motion.create(Link);

const curriculumAreas = [
    "Art",
    "Drama",
    "STEM",
    "Music",
    "Language",
    "Physical Education",
    "Social Studies",
    "Nature",
    "Technology",
    "Emotional Intelligence",
];

export default function Home() {
    return (
        <div className="space-y-16">
            <section className="relative h-[70vh] overflow-hidden rounded-xl">
                <div className="hero-image-reveal absolute inset-0">
                    <img
                        src="https://raisingchildren.net.au/__data/assets/image/0019/48070/encouraging-creativity-preschoolers.jpg"
                        alt="Children engaged in creative activities"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 flex items-center justify-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white text-center px-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}>
                        Fostering Creativity in Early Childhood Education
                    </motion.h1>
                </div>
            </section>

            <section className="text-center staggered-animation">
                <h2 className="text-3xl font-semibold mb-6">
                    Empowering Young Minds
                </h2>
                <p className="text-xl max-w-2xl mx-auto">
                    Discover innovative approaches to nurture creativity and
                    imagination in early childhood education.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Curriculum Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curriculumAreas.map((area, index) => (
                        <MotionLink
                            href={`/curriculum/${area
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            key={area}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "var(--quinary)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}>
                            <h3 className="text-xl font-semibold mb-2">
                                {area}
                            </h3>
                            <p>
                                Explore creative approaches to{" "}
                                {area.toLowerCase()} in early childhood
                                education.
                            </p>
                        </MotionLink>
                    ))}
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-8">Our Approach</h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <img
                        src="https://images.stockcake.com/public/0/4/a/04a3ff3c-9b60-4155-a8a4-ea8e4c18271c_large/creative-classroom-activity-stockcake.jpg"
                        alt="Children engaged in creative activities"
                        width={800}
                        height={400}
                        className="rounded-lg mx-auto mb-8 shadow-xl"
                    />
                </motion.div>
                <motion.p
                    className="max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    Our comprehensive guide provides educators with the tools,
                    resources, and insights needed to foster creativity across
                    various curriculum areas. From art to STEM, we offer
                    age-appropriate activities and evidence-based strategies to
                    nurture young minds.
                </motion.p>
            </section>
            <Footer />
        </div>
    );
}
