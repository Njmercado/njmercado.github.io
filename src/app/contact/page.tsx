'use client'

import { CV_LINKS } from "@/constants/general.constant";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Contact() {

  const goTo = (link: string) => { window.open(link, '_blank') }
  const goToLinkedIn = () => goTo(CV_LINKS.LINKEDIN)
  const goToGithub = () => goTo(CV_LINKS.GITHUB)

  return (
    <article className="flex flex-col justify-center items-center">
      <section className="flex xs:flex-col sm:flex-col md:flex-row items-center">
        <Image src="/static/atlantico.png" width={300} height={300} alt="Image of Colombian Atlantic's department."/>
        <p> <em>Barranquilla - Colombia</em> </p>
      </section>
      <section className="mt-10">
        <p className="flex gap-5">
          <span className="cursor-pointer"><FontAwesomeIcon icon={faLinkedin} size={'2xl'} onClick={goToLinkedIn}/></span>
          <span className="cursor-pointer"><FontAwesomeIcon icon={faGithub} size={'2xl'} onClick={goToGithub}/></span>
        </p>
      </section>
    </article>
  )
}