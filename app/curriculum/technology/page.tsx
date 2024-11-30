import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function TechnologyPage() {
    return (
        <CurriculumArea
            title="Technology in Early Childhood Education"
            introduction="Technology in early childhood education, when used appropriately, can enhance learning experiences, develop digital literacy skills, and prepare children for a technology-rich world. It encompasses the use of various digital tools and media to support exploration, creativity, and problem-solving across all areas of the curriculum."
            perspectives="In early childhood education, the use of technology is guided by several frameworks. The NAEYC and Fred Rogers Center joint position statement emphasizes the importance of intentional and appropriate use of technology. The SAMR model (Substitution, Augmentation, Modification, Redefinition) provides a framework for integrating technology effectively. The concept of 'Digital Play' highlights the importance of playful, exploratory approaches to technology use."
            resources={[
                "Age-appropriate educational apps and software",
                "Digital cameras and simple video recorders",
                "Interactive whiteboards or tablets",
                "Programmable toys (e.g., Bee-Bots, Code-a-pillars)",
                "Green screen technology for storytelling",
            ]}
            learningExamples={{
                "0-2": [
                    "Exploring cause and effect with simple touch screen apps",
                    "Viewing family photos on digital devices",
                    "Listening to recorded stories and songs",
                ],
                "2-3": [
                    "Using simple drawing and painting apps",
                    "Exploring digital puzzles and memory games",
                    "Capturing photos of daily activities with assistance",
                ],
                "3-5": [
                    "Creating digital stories with text and images",
                    "Using coding apps designed for early learners",
                    "Exploring virtual field trips and 360° videos",
                ],
                "6-8": [
                    "Basic keyboarding and word processing",
                    "Creating simple animations or digital art",
                    "Using technology for research and presentation",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Digital Peek-a-Boo",
                    description:
                        "Use a tablet to play an interactive peek-a-boo game, promoting social interaction and early understanding of digital interfaces.",
                },
                {
                    ageGroup: "2-3",
                    title: "Sound Safari",
                    description:
                        "Use a digital recording device to capture and identify various sounds in the environment, enhancing listening skills and environmental awareness.",
                },
                {
                    ageGroup: "3-5",
                    title: "Code Your Friend",
                    description:
                        "Create a life-sized grid on the floor and have children write 'code' (directional instructions) to guide a friend through an obstacle course, introducing basic programming concepts.",
                },
            ]}
            ageGroupVideos={videoSources.technology}
            criticalReflection="Integrating technology into early childhood education has shown me both its potential benefits and the importance of thoughtful implementation. When used intentionally, technology has enhanced children's engagement, provided new avenues for creativity, and supported individualized learning. However, it's crucial to maintain a balance with hands-on, real-world experiences and to actively guide children's technology use. I've found that using technology to document learning (e.g., digital portfolios) has improved communication with families and children's self-reflection. Integrating technology across the curriculum, such as using digital tools for art creation or data collection in science projects, has expanded learning opportunities. It's essential to continually evaluate and select high-quality digital resources and to model responsible digital citizenship. Moving forward, I aim to further explore how technology can support inclusive practices and provide new ways for children to express their ideas and understanding."
        />
    );
}
