import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function STEMPage() {
    return (
        <CurriculumArea
            title="STEM in Early Childhood Education"
            introduction="STEM (Science, Technology, Engineering, and Mathematics) education in early childhood fosters curiosity, critical thinking, and problem-solving skills. It provides a foundation for children to explore and understand the world around them through hands-on experiences and inquiry-based learning."
            perspectives="In early childhood education, STEM is viewed as an integrated approach to learning that encourages exploration, experimentation, and discovery. Theories such as Piaget's cognitive development theory and Dewey's experiential learning emphasize the importance of hands-on, inquiry-based learning in developing scientific and mathematical thinking skills."
            resources={[
                "Building blocks and construction sets",
                "Simple machines and gears",
                "Magnifying glasses and microscopes",
                "Coding toys and apps for beginners",
                "Nature exploration kits",
            ]}
            learningExamples={{
                "0-2": [
                    "Exploring cause and effect with simple toys",
                    "Stacking and nesting activities",
                    "Sensory play with different textures and materials",
                ],
                "2-3": [
                    "Basic counting and sorting activities",
                    "Simple science experiments (e.g., sink or float)",
                    "Introductory puzzles and shape recognition",
                ],
                "3-5": [
                    "Building structures with various materials",
                    "Planting and observing seed growth",
                    "Introduction to simple coding concepts through games",
                ],
                "6-8": [
                    "Designing and conducting simple experiments",
                    "Creating and using simple machines",
                    "Exploring basic robotics and programming",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Texture Exploration Board",
                    description:
                        "Create a board with various safe textures for babies to touch and explore, promoting sensory development and early scientific observation.",
                },
                {
                    ageGroup: "2-3",
                    title: "Magnetic Discovery Bottles",
                    description:
                        "Make discovery bottles filled with magnetic items and provide a strong magnet for children to move objects inside the bottle, introducing basic concepts of magnetism.",
                },
                {
                    ageGroup: "3-5",
                    title: "Recycled Materials Engineering Challenge",
                    description:
                        "Provide a variety of recycled materials and challenge children to build a structure that can hold a specific weight, encouraging problem-solving and engineering skills.",
                },
            ]}
            ageGroupVideos={videoSources.stem}
            criticalReflection="Implementing STEM activities in early childhood education has shown me the incredible capacity young children have for scientific thinking and problem-solving. By providing open-ended materials and encouraging experimentation, I've seen children develop persistence, creativity, and critical thinking skills. Integrating STEM concepts across the curriculum, such as using mathematical thinking in art projects or scientific observation in outdoor play, has created more holistic and engaging learning experiences. It's crucial to maintain a balance between guided instruction and free exploration to foster children's natural curiosity and love for learning."
        />
    );
}
