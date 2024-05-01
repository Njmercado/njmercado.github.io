import React from "react";
import { IProjectTemplate, ProjectData } from "../Project/interface/project";
import ProjectItem from "../Project/Project";

export default function ProjectList({ projects }: ProjectData) {
  return (
    projects.map((project: IProjectTemplate, index: any) => {
      return (
        <article key={index} className="my-4 flex flex-row justify-center items-center">
          <span>{index+1}</span>
          <ProjectItem
            image={{
              src: project.image.src,
              alt: project.image.alt,
            }}
            title={project.short.title}
            description={project.short.description}
            techs={project.short.techs}
          ></ProjectItem>
        </article>
      )
    })
  )
}