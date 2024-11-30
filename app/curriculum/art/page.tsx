import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function ArtPage() {
    return (
        <CurriculumArea
            title="Art in Early Childhood Education"
            introduction="Art plays a crucial role in fostering creativity and self-expression in young children. It provides a medium for children to explore their imagination, develop fine motor skills, and communicate their thoughts and feelings."
            perspectives="In early childhood education, art is viewed as a process rather than a product. Theories such as Reggio Emilia emphasize the importance of allowing children to explore materials freely and express themselves without rigid guidelines. Vygotsky's sociocultural theory also highlights the role of art in cognitive development and cultural learning."
            resources={[
                "Various art materials (paints, crayons, clay, paper)",
                "Digital drawing apps for tablets",
                "Virtual museum tours",
                "Age-appropriate art history books",
                "Nature items for texture and pattern exploration",
            ]}
            learningExamples={{
                "0-2": [
                    "Finger painting with edible, non-toxic paints",
                    "Exploring textures with sensory boards",
                    "Simple color mixing activities",
                ],
                "2-3": [
                    "Creating collages with various materials",
                    "Basic shape drawing and identification",
                    "Playdough sculpting",
                ],
                "3-5": [
                    "Self-portrait drawing",
                    "Color theory experiments",
                    "Nature-inspired art projects",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Sensory Paint Bags",
                    description:
                        "Create sealed plastic bags filled with paint for babies to safely explore colors and textures.",
                },
                {
                    ageGroup: "2-3",
                    title: "Nature Paintbrushes",
                    description:
                        "Collect natural items like leaves and flowers to use as paintbrushes, encouraging exploration of textures and patterns.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Color Wheels",
                    description:
                        "Guide children in creating color wheels that represent different emotions, fostering emotional intelligence and color theory understanding.",
                },
            ]}
            ageGroupVideos={videoSources.art}
            // implementationEvidence={{
            //     type: "video",
            //     src: "/videos/art-implementation.mp4",
            // }}
            criticalReflection="Reflecting on my teaching practices, I've found that providing open-ended art experiences has significantly enhanced creativity in my classroom. By focusing on the process rather than the end product, children feel more confident in expressing themselves. I've also noticed that integrating art with other curriculum areas, such as using painting to explore science concepts, has led to deeper, more engaging learning experiences."
        />
    );
}
