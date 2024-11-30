import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function DramaPage() {
    return (
        <CurriculumArea
            title="Drama in Early Childhood Education"
            introduction="Drama plays a vital role in fostering creativity, emotional intelligence, and social skills in young children. It provides a platform for children to explore different roles, express themselves, and develop their imagination."
            perspectives="In early childhood education, drama is viewed as a powerful tool for learning and development. Theories such as Vygotsky's sociocultural theory emphasize the importance of dramatic play in cognitive and social development. The Reggio Emilia approach also highlights the role of dramatic arts in children's learning and self-expression."
            resources={[
                "Dress-up clothes and props",
                "Puppets and puppet theaters",
                "Story dice or cards for improvisation",
                "Simple stage or performance area",
                "Audio equipment for sound effects and music",
            ]}
            learningExamples={{
                "0-2": [
                    "Peek-a-boo games",
                    "Simple finger plays and action songs",
                    "Mimicking animal sounds and movements",
                ],
                "2-3": [
                    "Role-playing familiar scenarios (e.g., grocery shopping, doctor visit)",
                    "Simple puppet shows",
                    "Acting out favorite stories",
                ],
                "3-5": [
                    "Creating and performing short skits",
                    "Emotion recognition and expression exercises",
                    "Improvisation games",
                ],
                "6-8": [
                    "Writing and performing original plays",
                    "Character development exercises",
                    "Exploring different theatrical styles",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Mirror Play",
                    description:
                        "Encourage babies and toddlers to mimic facial expressions and simple gestures in a mirror or with a partner.",
                },
                {
                    ageGroup: "2-3",
                    title: "Story Box Theater",
                    description:
                        "Create a 'story box' filled with random objects. Children take turns pulling out items and incorporating them into an improvised story.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Masks",
                    description:
                        "Have children create masks representing different emotions, then act out scenarios using their masks to express feelings.",
                },
            ]}
            ageGroupVideos={videoSources.drama}
            criticalReflection="Reflecting on my teaching practices, I've observed that incorporating drama activities has significantly enhanced children's confidence, empathy, and problem-solving skills. By providing opportunities for dramatic play and performance, children learn to express themselves more effectively and understand others' perspectives. I've found that integrating drama with other curriculum areas, such as using role-play to explore historical events or scientific concepts, has led to more engaging and memorable learning experiences."
        />
    );
}
