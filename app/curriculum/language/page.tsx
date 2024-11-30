import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function LanguagePage() {
    return (
        <CurriculumArea
            title="Language in Early Childhood Education"
            introduction="Language development is a crucial aspect of early childhood education, laying the foundation for literacy, communication, and cognitive growth. It encompasses listening, speaking, reading, and writing skills, which are essential for children's overall development and future academic success."
            perspectives="In early childhood education, language development is viewed through various theoretical lenses. Chomsky's theory of language acquisition suggests an innate ability to learn language, while Vygotsky's sociocultural theory emphasizes the role of social interaction in language development. The emergent literacy approach highlights the importance of a print-rich environment and meaningful literacy experiences."
            resources={[
                "Age-appropriate books in various genres",
                "Puppets and props for storytelling",
                "Letter recognition games and materials",
                "Writing materials (crayons, markers, paper)",
                "Audio books and storytelling apps",
            ]}
            learningExamples={{
                "0-2": [
                    "Reading board books and naming objects",
                    "Singing nursery rhymes and simple songs",
                    "Responding to and imitating sounds and gestures",
                ],
                "2-3": [
                    "Engaging in conversation and turn-taking",
                    "Matching objects to pictures in books",
                    "Scribbling and early mark-making",
                ],
                "3-5": [
                    "Retelling stories and creating simple narratives",
                    "Recognizing letters and their sounds",
                    "Attempting to write own name and familiar words",
                ],
                "6-8": [
                    "Reading simple texts independently",
                    "Writing short stories or journal entries",
                    "Exploring different genres of literature",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Texture Story Bags",
                    description:
                        "Create story bags with various textured items related to a simple story, encouraging sensory exploration and vocabulary development as you narrate.",
                },
                {
                    ageGroup: "2-3",
                    title: "Story Stones",
                    description:
                        "Paint simple images on stones and use them to create and tell stories, fostering narrative skills and imagination.",
                },
                {
                    ageGroup: "3-5",
                    title: "Alphabet Nature Hunt",
                    description:
                        "Go on a nature walk and challenge children to find items that start with different letters, combining outdoor exploration with letter recognition and phonics.",
                },
            ]}
            ageGroupVideos={videoSources.language}
            criticalReflection="Implementing a rich language curriculum has shown me the incredible capacity young children have for language acquisition and creativity. By providing a print-rich environment and engaging children in meaningful conversations throughout the day, I've seen significant improvements in vocabulary, comprehension, and communication skills. Integrating language activities across all areas of the curriculum, such as discussing scientific observations or describing mathematical patterns, has created more holistic learning experiences. It's crucial to celebrate linguistic diversity and support children's home languages while fostering English language development. I've found that using technology thoughtfully, such as interactive storytelling apps, can enhance engagement and provide additional language support when used in moderation alongside traditional methods."
        />
    );
}
