'use client';

import { useParams, useRouter } from "next/navigation"
import { EMPTY_PROJECT_TEMPLATE, PROJECTS } from "@/constants/projects.constant";
import { Title, TitleSize } from "@/components";
import React, { useEffect, useState } from "react";
import { URL } from "@/constants/urls.constant";
import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import Button, { Action } from "@/components/Button/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/lib/store/hooks";
import { setComponent } from "@/lib/store/features/footer/footerSlice";

export function generateStaticParams() {
  const pages = ['kribi', 'drata', 'neumomed'];
  return pages.map((page) => ({ name: page }));
}

export default function ProjectView() {

  const dispatch = useAppDispatch()

  const params = useParams<{ project: string }>()
  const router = useRouter()
  const [project, setProject] = useState(EMPTY_PROJECT_TEMPLATE as IProjectTemplate);

  const getProject = () => {
    const projectName = params.project.toUpperCase()
    const gottenProject = PROJECTS.filter(project =>
      project.title.toUpperCase() === projectName
    )[0]

    return gottenProject;
  }

  const isProjectEmpty = (project: any) => project === undefined
  const go404 = () => router.push(URL.NOT_FOUND.MAIN)

  useEffect(() => {
    dispatch(setComponent('cv_button'))

    const project = getProject()

    if (isProjectEmpty(project)) go404()
    else setProject(project)
  }, [])

  return (
    <article>
      <section className="-ml-2">
        <Button
          url={'/projects'}
          type={Action.LINK}
          value={
            <article className="flex gap-2 items-center px-1">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Projects</span>
            </article>
          }
        />
      </section>
      <section className="mt-20">
        <Title size={TitleSize.EXTRA_LARGE} value={params.project.toUpperCase()}></Title>
        <p className="mt-10">
          {
            project?.description() ?? "Description"
          }
        </p>
      </section>
      <section className="mt-10">
        <Title size={TitleSize.BIG} value="Views"></Title>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {project?.images.map(({ src, alt }, index: number) =>
            <Image
              className="shadow-md shadow-slate-400 rounded-md"
              src={src}
              alt={alt}
              width={400}
              height={400}
              key={index}
            />
          )}
        </div>
      </section>
      <section className="mt-10">
        <Title size={TitleSize.BIG} value="Used techs"></Title>
        {
          project.techs.length > 0 ?
            <p className="flex flex-wrap gap-10 justify-around mt-10">
              {
                project?.techs.map(
                  (tech: React.JSX.Element, index: any) =>
                    <span key={index}>{tech}</span>
                )
              }
            </p> :
            "No techs were used here :("
        }
      </section>
      {
        project.technicalDescription?.() &&
        <section className="mt-10">
          <Title size={TitleSize.BIG} value="Technical explanation"></Title>
          <p className="mt-10">
            {
              project.technicalDescription?.() ?? "There is no technical description available :("
            }
          </p>
        </section>
      }
      <section className="mt-10 text-center">
        <Button
          onClick={() => window.open(project.link, '_blank')}
          value="Visit"
          className="w-9/12 h-20"
        ></Button>
      </section>
    </article>
  )
}