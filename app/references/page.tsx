"use client";

import { motion } from "framer-motion";

export default function ReferencesPage() {
    const references = [
        "Eisner, E. W. (2002). The Arts and the Creation of Mind. Yale University Press.",
        "Gardner, H. (2011). Frames of Mind: The Theory of Multiple Intelligences. Basic Books.",
        "Malaguzzi, L. (1993). For an Education Based on Relationships. Young Children, 49(1), 9-12.",
        "Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.",
        "Edwards, C., Gandini, L., & Forman, G. (Eds.). (2011). The Hundred Languages of Children: The Reggio Emilia Experience in Transformation. Praeger.",
        "Craft, A. (2002). Creativity and Early Years Education: A Lifewide Foundation. Continuum.",
        "Runco, M. A. (2003). Education for Creative Potential. Scandinavian Journal of Educational Research, 47(3), 317-324.",
        "Plucker, J. A., Beghetto, R. A., & Dow, G. T. (2004). Why Isn't Creativity More Important to Educational Psychologists? Potentials, Pitfalls, and Future Directions in Creativity Research. Educational Psychologist, 39(2), 83-96.",
        "Torrance, E. P. (1972). Can We Teach Children To Think Creatively?. The Journal of Creative Behavior, 6(2), 114-143.",
        "Csikszentmihalyi, M. (1996). Creativity: Flow and the Psychology of Discovery and Invention. Harper Collins Publishers.",
    ];

    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <motion.h1
                className="text-5xl font-bold text-center mb-12"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                References
            </motion.h1>
            <motion.ul
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                {references.map((reference, index) => (
                    <motion.li
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}>
                        {reference}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}
