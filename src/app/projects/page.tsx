'use client';

import ProjectList from '@/components/ProjectList/ProjectList';
import { Title, TitleSize } from '@/components/Title/Title';
import { PROJECTS } from '@/constants/projects.constant';
import { setComponent } from '@/lib/store/features/footer/footerSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

export default function Project() {

  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(setComponent('cv_button')) }, [])

  return (
    <article>
      <section>
        <Title size={TitleSize.BIG} value={
          <p>
            <span>My projects</span> <FontAwesomeIcon icon={faGear} size='sm'></FontAwesomeIcon>
          </p>
        }></Title>
        <p className="mt-10">
          Thought my professional life I have participated, developed and helped on multiples projects which includes since <strong>WordPress</strong>
          till really complex structures in <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Fast</strong>, <strong>NestJs</strong>...etc
        </p>
        <p className="mt-5">
          These ones are just a few of all developments I have been part.
        </p>
      </section>

      <section className="w-full mt-10">
        <Title size={TitleSize.NORMAL} value='Top Projects:'></Title>
        <ProjectList projects={PROJECTS}></ProjectList>
      </section>
    </article>
  )
}