import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function EmotionalIntelligencePage() {
    return (
        <CurriculumArea
            title="Emotional Intelligence in Early Childhood Education"
            introduction="Emotional intelligence in early childhood education focuses on helping children recognize, understand, and manage their emotions, as well as develop empathy and social skills. It is crucial for personal well-being, forming positive relationships, and future academic and life success."
            perspectives="In early childhood education, emotional intelligence is informed by various theories and approaches. Goleman's Emotional Intelligence framework emphasizes self-awareness, self-regulation, motivation, empathy, and social skills. The CASEL (Collaborative for Academic, Social, and Emotional Learning) framework provides a comprehensive approach to social-emotional learning. Attachment theory underscores the importance of secure relationships in emotional development."
            resources={[
                "Emotion cards and posters",
                "Puppets and dolls for role-playing",
                "Books about feelings and social situations",
                "Mindfulness and relaxation tools (e.g., breathing balls, calm-down jars)",
                "Emotion-focused music and movement materials",
            ]}
            learningExamples={{
                "0-2": [
                    "Mirroring facial expressions",
                    "Comforting routines and transitions",
                    "Simple naming of emotions during daily activities",
                ],
                "2-3": [
                    "Reading books about different emotions",
                    "Using feeling words in daily conversations",
                    "Simple breathing exercises for calming",
                ],
                "3-5": [
                    "Creating emotion collages or drawings",
                    "Role-playing different social scenarios",
                    "Practicing problem-solving steps for conflicts",
                ],
                "6-8": [
                    "Journaling about emotions and experiences",
                    "Engaging in group discussions about complex emotions",
                    "Developing and practicing coping strategies",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Emotion Mirror Play",
                    description:
                        "Use a mirror to help infants and toddlers recognize and imitate different facial expressions, fostering early emotional awareness.",
                },
                {
                    ageGroup: "2-3",
                    title: "Feelings Color Wheel",
                    description:
                        "Create a interactive color wheel where children can move an arrow to indicate their current emotion, promoting emotional vocabulary and self-awareness.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Charades",
                    description:
                        "Play a game where children act out different emotions for their peers to guess, enhancing emotional recognition and empathy.",
                },
            ]}
            ageGroupVideos={videoSources.emotionalIntelligence}
            criticalReflection="Implementing a focus on emotional intelligence in early childhood education has had a profound impact on the overall classroom environment and individual child development. By explicitly teaching and modeling emotional awareness and regulation strategies, I've observed significant improvements in children's ability to express their feelings appropriately, resolve conflicts, and show empathy towards others. Integrating emotional intelligence across the curriculum, such as discussing characters' feelings in literature or exploring emotions through art, has deepened learning experiences. It's crucial to create a safe, supportive environment where all emotions are acknowledged and children feel comfortable expressing themselves. Collaborating with families to reinforce emotional intelligence skills at home has been key to supporting children's overall social-emotional development. Moving forward, I aim to further explore how to support children in developing resilience and coping with more complex emotions and situations."
        />
    );
}
