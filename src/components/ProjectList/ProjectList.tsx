import React from "react";
import { IProjectTemplate } from "../Project/interface/ProjectTemplate.interface";
import ProjectItem from "../Project/ProjectItem";
import { useRouter } from "next/navigation";
import { ProjectArray } from '../Project/type/ProjectArray.type'
import { URL } from "@/constants/urls.constant";

export default function ProjectList({ projects }: ProjectArray) {
  const router = useRouter()
  return (
    projects.map((project: IProjectTemplate, index: any) => {
      return (
        <article onClick={() => router.push(`${URL.PROJECTS.MAIN}/${project.title}`)} key={index} className="my-4 flex flex-row justify-center items-center">
          <span>{index+1}</span>
          <ProjectItem
            image={project.images[0]}
            title={project.short.title}
            description={project.short.description}
            techs={project.short.techs}
          ></ProjectItem>
        </article>
      )
    })
  )
}