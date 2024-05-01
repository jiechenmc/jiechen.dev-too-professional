import { P, H2 } from "@/components/typography";

const About = () => {
    const about = `
    class Jie:
        def __init__(self):
            self.name = "Jie Chen"
            self.hometown = "Fuzhou, China"
            self.college = "Stony Brook University"
            self.expected_graduation_date = "May 2025"
            self.interests_and_hobbies =
            [
                "Gaming 🎮",
                "Eating 😋",
                "Data Visualization 📊",
                "Cloud Infrastructure ☁️",
                "Automation 🤖",
            ]`;

    return <div className="grid grid-cols-2">
        <pre>{about}</pre>
        <div>
            <section>
                <H2>
                    Work Experience
                </H2>
                <P>Software Engineering Co-Op @ Con Edison</P>
                <P>Student Assistant @ Stony Brook University Institutional Research </P>
                <P>Site Reliability Engineering Fellow @ MLH Fellowship </P>
            </section>
            <section>
                <H2>
                    Research Experience
                </H2>
                <P>Looking for cloud research experience</P>
            </section>
            <section>
                <H2>
                    Extra Extracurricular Experience
                </H2>
                <P>I am the President of the Google Developer Student Clubs at Stony Brook. I make tutorial with various things related to Google Cloud Platform. I have made tutorials on how to use Cloud Functions to upload files to Cloud Storage and how to deploy React applications to Cloud Compute with Docker.</P>
                <P>Team Lead at SBU Integrated Projects</P>
            </section>

            <section>
                <H2>
                    Relevant Undergraduate Courses Taken
                </H2>
                <P>System Administration, Software Development, Systems Fundamentals I & II</P>
                <P>Undergraduate Teaching Assistant for Systems Fundamentals I and Software Development</P>
            </section>

            <section>
                <H2>
                    Relevant Graduate Courses Taken
                </H2>
                <P>Operating Systems, Distributed and Decentralized Data Management</P>
            </section>
        </div>
    </div>;
}

export default About;