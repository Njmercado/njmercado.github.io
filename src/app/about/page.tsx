'use client'

import Button from "@/components/Button/Button";
import { Title, TitleSize } from "@/components/Title/Title";
import { URL } from "@/constants/urls.constant";
import { faAngular, faDigitalOcean, faGithub, faNodeJs, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function AboutMe() {

  const router = useRouter();
  const TECHS_I_KNOW = [faReact, faVuejs, faAngular, faNodeJs, faPython, faGithub, faDigitalOcean]

  const openKribiProject = () => {
    router.push(URL.PROJECTS.MAIN + '/Kribi')
  }

  return (
    <main>
      <section>
        <article>
          <p>
            Hi again visitor <span><FontAwesomeIcon icon={faHand} size='lg'></FontAwesomeIcon></span>
          </p>
        </article>
      </section>
      <section className="mt-10">
        <article>
          <p>
            First of all...these are the <strong>Techs I have worked on</strong> 
          </p>
          <p className="mt-5 grid grid-cols-4 gap-5">
            {
              TECHS_I_KNOW.map(tech =>
                <FontAwesomeIcon icon={tech} size="4x"></FontAwesomeIcon>
              )
            }
          </p>
        </article>
      </section>
      <section className="mt-10">
        <article>
          <p className="mt-5">
            Secondly...<strong className="ml-0">Computer Engineer</strong> with focus on Computer Sciences. <strong><em>3+ years</em></strong> of experience
            working with multiple technologies as in <strong><em>Frontend</em></strong> as in <strong><em>Backend</em></strong>. Moving
            to <strong>Data Analysis</strong> and <strong>ML</strong>.
          </p>
          <p className="mt-5">
            My <em>first project</em> was <Button onClick={openKribiProject} value="Kribi"></Button> which I developed at colleague time.
            There I learned a lot about <em>Web Development</em> and introduced myself into <em>FullStack</em> enviroment.
          </p>
          <p className="mt-5">
            After that I've been part of multiple massive web projects with different technologies where a learned and also gave all my potential applying <strong>SOLID</strong>, <strong>Design Patters</strong> and <strong>SCRUM</strong> principles.
          </p>
          <p className="mt-5">
            Most of my <strong>Soft Skills</strong> are related with <em>Communication</em>, <em>Team work</em>, <em>Leadership</em> and <em>Self-study</em>.
          </p>
          <p className="mt-5">
            Have been <strong>working completly remote</strong> since my <em>first work</em> at colleague which was an <strong>Argentinian Company</strong> related with the certification of <em>car patents and insurances</em>.
            Here I developed <em>UI/UX</em> experience designing and implementing <em>Figma</em> templates.
          </p>
          <p className="mt-5">
            <i>Draw the nature</i>, <i>Sports</i> like <em>Taekwondo</em>, red belt, and <i>Trekking</i> are mostly my hobbies.
          </p>
        </article>
      </section>
      <section className="mt-20">
        <article>
          <p className="grid grid-cols-2">
            <Button className="h-20" value="Download CV"></Button>
            <Button className="h-20" value="See Projects"></Button>
          </p>
        </article>
      </section>
    </main>
  )
}