import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function NaturePage() {
    return (
        <CurriculumArea
            title="Nature Education in Early Childhood"
            introduction="Nature education in early childhood fosters a connection with the natural world, promotes environmental stewardship, and supports holistic development. It provides rich opportunities for sensory exploration, scientific inquiry, and the development of empathy and respect for living things."
            perspectives="In early childhood education, nature education is influenced by various approaches. The Forest School philosophy emphasizes regular, extended time in nature. Richard Louv's concept of 'Nature-Deficit Disorder' highlights the importance of counteracting the lack of nature in modern childhoods. The Reggio Emilia approach views the environment, including nature, as the 'third teacher'."
            resources={[
                "Magnifying glasses and binoculars",
                "Nature journals and field guides",
                "Gardening tools and seeds",
                "Weather observation tools",
                "Natural loose parts for play and creation",
            ]}
            learningExamples={{
                "0-2": [
                    "Sensory exploration of natural materials",
                    "Outdoor tummy time and crawling",
                    "Observing and imitating animal sounds",
                ],
                "2-3": [
                    "Nature scavenger hunts",
                    "Simple planting activities",
                    "Weather observation and discussion",
                ],
                "3-5": [
                    "Creating nature art and mandalas",
                    "Basic plant and animal life cycle observations",
                    "Outdoor sensory and gross motor activities",
                ],
                "6-8": [
                    "Conducting simple environmental experiments",
                    "Keeping nature journals",
                    "Participating in conservation projects",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Natural Texture Board",
                    description:
                        "Create a board with various natural textures (bark, leaves, moss) for babies to safely explore, promoting sensory development and early nature connection.",
                },
                {
                    ageGroup: "2-3",
                    title: "Mini Beast Hotel",
                    description:
                        "Build a simple 'hotel' for insects using natural materials, encouraging observation of small creatures and fostering empathy for living things.",
                },
                {
                    ageGroup: "3-5",
                    title: "Seasonal Change Documentation",
                    description:
                        "Regularly photograph a specific outdoor area throughout the year, discussing and documenting seasonal changes observed by the children.",
                },
            ]}
            ageGroupVideos={videoSources.nature}
            criticalReflection="Implementing nature education has profoundly impacted both the children and myself as an educator. Regular outdoor experiences have improved children's physical health, emotional well-being, and cognitive development. I've observed increased creativity, problem-solving skills, and resilience as children navigate and explore natural environments. Integrating nature across the curriculum, such as using natural materials in art or outdoor spaces for storytelling, has enriched all areas of learning. It's crucial to address safety concerns while still allowing for appropriate risk-taking that builds confidence and skills. I've found that involving families in nature education, through take-home activities or family nature events, has extended learning beyond the classroom and fostered a community-wide appreciation for the natural world."
        />
    );
}
