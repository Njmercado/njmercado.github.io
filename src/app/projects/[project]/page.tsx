'use client';

import { useParams, useRouter } from "next/navigation"
import { EMPTY_PROJECT_TEMPLATE, PROJECTS} from "@/constants/projects.constant";
import { Title, TitleSize } from "@/components/Title/Title";
import React, { useEffect, useState } from "react";
import { URL } from "@/constants/urls.constant";
import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import Button from "@/components/Button/Button";

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
          {
            project?.images.length > 0 ? "map images" : "Poner template de imagenes cargando..."
          }
        </article>
      </section>
      <section className="mt-10">
        <article>
          <Title size={TitleSize.BIG} value="Used techs"></Title>
          {
            project.techs.length > 0 ?
              <p className="grid grid-cols-4 text-center mt-10">
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