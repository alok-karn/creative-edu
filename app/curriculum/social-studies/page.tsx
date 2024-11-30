import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function SocialStudiesPage() {
    return (
        <CurriculumArea
            title="Social Studies in Early Childhood Education"
            introduction="Social studies in early childhood education helps children understand their place in the world, develop a sense of community, and learn about diverse cultures and histories. It encompasses concepts of identity, family, community, and basic civic engagement, laying the foundation for future social awareness and responsible citizenship."
            perspectives="In early childhood education, social studies is viewed through various theoretical lenses. Bronfenbrenner's Ecological Systems Theory emphasizes the importance of understanding children's various social contexts. Vygotsky's sociocultural theory highlights the role of social interaction in learning. The anti-bias curriculum approach stresses the importance of addressing diversity and equity from an early age."
            resources={[
                "Multicultural books and stories",
                "Maps and globes appropriate for young children",
                "Dress-up clothes from various cultures",
                "Community helper props and costumes",
                "Family photo projects and materials",
            ]}
            learningExamples={{
                "0-2": [
                    "Looking at family photos and naming family members",
                    "Simple songs about community helpers",
                    "Exploring diverse baby dolls and toys",
                ],
                "2-3": [
                    "Role-playing different community roles",
                    "Exploring cultural celebrations through stories and activities",
                    "Learning basic concepts of sharing and turn-taking",
                ],
                "3-5": [
                    "Creating simple maps of the classroom or neighborhood",
                    "Discussing and celebrating diverse family structures",
                    "Introducing basic concepts of fairness and group decision-making",
                ],
                "6-8": [
                    "Learning about local history and landmarks",
                    "Exploring global cultures through projects and presentations",
                    "Introducing basic civic concepts and community service",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Diverse Faces Mobile",
                    description:
                        "Create a mobile with photos of diverse faces, including families and children, to promote early awareness of human diversity.",
                },
                {
                    ageGroup: "2-3",
                    title: "Community Helper Puppet Show",
                    description:
                        "Use simple puppets to act out scenarios involving community helpers, fostering understanding of different roles in society.",
                },
                {
                    ageGroup: "3-5",
                    title: "Cultural Cuisine Exploration",
                    description:
                        "Organize a multicultural food tasting event, where children can explore and learn about foods from different cultures, promoting cultural awareness and appreciation.",
                },
            ]}
            ageGroupVideos={videoSources.socialStudies}
            criticalReflection="Implementing social studies in early childhood has shown me the importance of fostering a sense of belonging and respect for diversity from a young age. By incorporating diverse perspectives and cultural experiences into our daily activities, I've seen children develop empathy, curiosity about others, and a stronger sense of their own identity. Integrating social studies concepts across the curriculum, such as exploring environmental stewardship in science or diverse artistic traditions in art, has created more holistic and meaningful learning experiences. It's crucial to approach sensitive topics in age-appropriate ways and to involve families in sharing their cultural knowledge and experiences. I've found that using project-based learning approaches, where children explore real-world social issues at their level, has been particularly effective in developing critical thinking and civic engagement skills."
        />
    );
}
