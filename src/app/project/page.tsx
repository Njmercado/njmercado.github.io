'use client';

import ProjectList from '@/components/ProjectList/ProjectList';
import { ProjectsData } from '@/constants/projects';

export default function Project() {
  return (
    <div>
      <section>
        <h2 className='text-2xl font-bold'>My projects</h2>
        <p>
          A lo largo de mi vida he desarrollado, y participado, en multiples proyectos.
          Los proyectos que he tocado han sido desde manejo con <strong>Wordpress</strong> hasta
          complejos entramados en <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Visual Basic</strong>,
          entre mucho otros.
        </p>
      </section>

      <article className="w-full">
        <h3 className="mt-4 text-xl font-bold">
          Populares:
        </h3>
        <ProjectList projects={ProjectsData}></ProjectList>
      </article>
    </div>
  )
}