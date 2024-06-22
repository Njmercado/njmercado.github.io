'use client'

import Button, { Action } from "@/components/Button/Button";
import { TECHS_I_KNOW } from "@/constants/general.constant";
import { URL } from "@/constants/urls.constant";
import { setComponent } from "@/lib/store/features/footer/footerSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutMe() {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const openKribiProject = () => {
    router.push(URL.PROJECTS.MAIN + '/Kribi')
  }

  useEffect(() => { dispatch(setComponent('cv_button')) }, [])

  return (
    <article>
      <section>
        <p>
          Hi again visitor <span><FontAwesomeIcon icon={faHand} size='lg'></FontAwesomeIcon></span>
        </p>
      </section>
      <section className="mt-10">
        <p>
          First of all...these are the <strong>Techs I have worked on</strong>
        </p>
        <p className="mt-5 grid grid-cols-4 gap-5">
          {
            TECHS_I_KNOW.map((tech: any, index: number) =>
              <FontAwesomeIcon icon={tech} size="4x" key={index}></FontAwesomeIcon>
            )
          }
        </p>
      </section>
      <section className="mt-10">
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
      </section>
      <section className="mt-20">
        <p className="flex flex-row justify-center">
          <Button
            url='/projects'
            type={Action.LINK}
            className="h-20 w-2/5"
            value="See Projects"
          />
        </p>
      </section>
    </article>
  )
}