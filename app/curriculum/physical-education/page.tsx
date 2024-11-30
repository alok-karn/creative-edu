import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function PhysicalEducationPage() {
    return (
        <CurriculumArea
            title="Physical Education in Early Childhood"
            introduction="Physical education in early childhood is crucial for developing motor skills, promoting health and well-being, and fostering a lifelong love of physical activity. It encompasses a range of activities that support gross and fine motor development, spatial awareness, and social skills through movement and play."
            perspectives="In early childhood education, physical development is viewed through various theoretical lenses. Piaget's cognitive development theory highlights the importance of sensorimotor experiences in early learning. The Dynamic Systems Theory emphasizes how movement emerges from the interaction of multiple factors. The concept of Physical Literacy underscores the importance of developing fundamental movement skills for lifelong physical activity."
            resources={[
                "Age-appropriate sports equipment (e.g., soft balls, bean bags)",
                "Balance beams and stepping stones",
                "Parachutes and tunnels for group activities",
                "Rhythm instruments for movement activities",
                "Outdoor play equipment (e.g., climbing structures, slides)",
            ]}
            learningExamples={{
                "0-2": [
                    "Tummy time and crawling exercises",
                    "Guided reaching and grasping activities",
                    "Simple action songs with movements",
                ],
                "2-3": [
                    "Obstacle courses with climbing and crawling",
                    "Ball rolling and throwing games",
                    "Dancing and moving to music",
                ],
                "3-5": [
                    "Structured games with simple rules",
                    "Balancing and coordination activities",
                    "Introductory yoga poses for children",
                ],
                "6-8": [
                    "Team sports with modified rules",
                    "Complex movement sequences and dances",
                    "Fitness activities adapted for children",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Sensory Pathway",
                    description:
                        "Create a path with different textures for babies to crawl over, promoting sensory exploration and gross motor development.",
                },
                {
                    ageGroup: "2-3",
                    title: "Animal Movement Game",
                    description:
                        "Play a game where children move like different animals, encouraging creativity, gross motor skills, and body awareness.",
                },
                {
                    ageGroup: "3-5",
                    title: "Storytelling Yoga",
                    description:
                        "Combine storytelling with yoga poses, creating an imaginative movement experience that enhances flexibility, balance, and mindfulness.",
                },
            ]}
            ageGroupVideos={videoSources.physicalEducation}
            criticalReflection="Implementing a comprehensive physical education program in early childhood has shown me the profound impact movement has on children's overall development. By providing a variety of structured and unstructured physical activities, I've observed improvements in children's coordination, confidence, and social skills. Integrating physical activities throughout the day, such as movement breaks during cognitive tasks or using active games to teach academic concepts, has enhanced engagement and learning across all areas of the curriculum. It's crucial to create an inclusive environment that celebrates diverse abilities and encourages all children to participate and enjoy physical activity. I've found that involving families and educating them about the importance of physical activity has helped reinforce healthy habits beyond the classroom."
        />
    );
}
