'use client';

import { useParams, useRouter } from "next/navigation"
import { EMPTY_PROJECT_TEMPLATE, PROJECTS } from "@/constants/projects.constant";
import { Title, TitleSize } from "@/components/Title/Title";
import React, { useEffect, useState } from "react";
import { URL } from "@/constants/urls.constant";
import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import Button, { Action } from "@/components/Button/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ProjectView() {

  const params = useParams<{ project: string }>()
  const router = useRouter()
  const [project, setProject] = useState(EMPTY_PROJECT_TEMPLATE as IProjectTemplate);

  useEffect(() => {
    const projectName = params.project.toUpperCase()
    const gottenProject = PROJECTS.filter(project =>
      project.title.toUpperCase() === projectName
    )[0]
    const isProjectEmpty = () => gottenProject === undefined

    if (isProjectEmpty()) {
      router.push(URL.NOT_FOUND.MAIN)
    } else {
      setProject(gottenProject)
    }
  }, [])

  return (
    <main>
      <section>
        <article className="-ml-2">
          <Button
            url={'/projects'}
            type={Action.LINK}
            value={
              <article className="flex gap-2 items-center px-1">
                <FontAwesomeIcon icon={faArrowLeft}/>
                <span>Projects</span>
              </article>
            }
          />
        </article>
      </section>
      <section className="mt-20">
        <article>
          <Title size={TitleSize.EXTRA_LARGE} value={params.project.toUpperCase()}></Title>
          <p className="mt-10">
            {
              project?.description() ?? "Description"
            }
          </p>
        </article>
      </section>
      <section className="mt-10">
        <article>
          <Title size={TitleSize.BIG} value="Views"></Title>
          <p className="flex flex-wrap gap-4 justify-center mt-10">
            {project?.images.map(({ src, alt }) =>
              <Image
                className="shadow-md shadow-slate-400 rounded-md" 
                src={src}
                alt={alt}
                width={300}
                height={300}
              />
            )}
          </p>
        </article>
      </section>
      <section className="mt-10">
        <article>
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
        </article>
      </section>
      <section className="mt-10">
        <article>
          <Title size={TitleSize.BIG} value="Technical explanation"></Title>
          <p className="mt-10">
            {
              project.technicalDescription() ?? "There is no technical description available :("
            }
          </p>
        </article>
      </section>
      <section className="mt-10 text-center">
        <Button
          onClick={() => window.open(project.link, '_blank')}
          value="Visit"
          className="w-9/12 h-20"
        ></Button>
      </section>
    </main>
  )
}