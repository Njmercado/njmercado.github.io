'use client';

import ProjectList from '@/components/ProjectList/ProjectList';
import { Title, TitleSize } from '@/components/Title/Title';
import { PROJECTS } from '@/constants/projects.constant';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Project() {
  return (
    <div>
      <section>
        <Title size={TitleSize.BIG} value={
          <p>
            <span>My projects</span> <FontAwesomeIcon icon={faGear} size='sm'></FontAwesomeIcon>
          </p>
        }></Title>
        <p className="mt-10">
          A lo largo de mi vida profesional he desarrollado, y participado, en multiples proyectos.
          Los proyectos que he tocado han sido desde manejo con <strong>Wordpress</strong> hasta
          complejos entramados en <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Visual Basic</strong>,
          entre mucho otros.
        </p>
      </section>

      <article className="w-full mt-10">
        <Title size={TitleSize.NORMAL} value='Populares:'></Title>
        <ProjectList projects={PROJECTS}></ProjectList>
      </article>
    </div>
  )
}