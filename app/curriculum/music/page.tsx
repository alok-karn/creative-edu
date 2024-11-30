import { videoSources } from "@/lib/videoSources";
import CurriculumArea from "../../components/CurriculumArea";

export default function MusicPage() {
    return (
        <CurriculumArea
            title="Music in Early Childhood Education"
            introduction="Music plays a crucial role in early childhood development, fostering creativity, cognitive skills, and emotional expression. It provides a joyful medium for children to explore rhythm, melody, and movement while developing language and social skills."
            perspectives="In early childhood education, music is viewed as a powerful tool for learning and development. Theories such as Gardner's Multiple Intelligences highlight musical intelligence as one of the key areas of human capability. The Orff Approach and Kodály Method emphasize the importance of active music-making and the use of folk songs in children's musical development."
            resources={[
                "Age-appropriate musical instruments (e.g., shakers, drums, xylophones)",
                "Recorded music from various genres and cultures",
                "Music creation apps for tablets",
                "Props for movement activities (e.g., scarves, ribbons)",
                "Books that incorporate songs and rhymes",
            ]}
            learningExamples={{
                "0-2": [
                    "Singing lullabies and simple songs",
                    "Exploring sounds with rattles and shakers",
                    "Moving to music with adult guidance",
                ],
                "2-3": [
                    "Participating in action songs and finger plays",
                    "Exploring rhythm with simple percussion instruments",
                    "Recognizing and imitating animal sounds in songs",
                ],
                "3-5": [
                    "Learning and performing simple songs",
                    "Creating sound stories with instruments",
                    "Exploring tempo and dynamics through movement",
                ],
                "6-8": [
                    "Reading basic rhythm notation",
                    "Composing simple melodies",
                    "Exploring music from different cultures",
                ],
            }}
            creativeActivities={[
                {
                    ageGroup: "0-2",
                    title: "Sensory Sound Bottles",
                    description:
                        "Create sealed bottles filled with different materials to produce various sounds, encouraging auditory exploration and cause-and-effect learning.",
                },
                {
                    ageGroup: "2-3",
                    title: "Body Percussion Orchestra",
                    description:
                        "Guide children in creating rhythms using body percussion (clapping, patting, stomping), fostering rhythm skills and body awareness.",
                },
                {
                    ageGroup: "3-5",
                    title: "Emotion Music Painting",
                    description:
                        "Play various music pieces and have children paint how the music makes them feel, connecting music with emotional expression and visual arts.",
                },
            ]}
            ageGroupVideos={videoSources.music}
            criticalReflection="Incorporating music into daily activities has had a profound impact on children's engagement and learning in my classroom. I've observed how music enhances language development, especially for children learning a second language, and supports memory and recall of information. Group music activities have fostered a sense of community and improved social skills. By integrating music with other curriculum areas, such as using counting songs in math or movement songs in physical education, I've created more holistic and enjoyable learning experiences. It's important to provide a variety of musical experiences and to celebrate the diverse musical backgrounds of the children in the classroom."
        />
    );
}
