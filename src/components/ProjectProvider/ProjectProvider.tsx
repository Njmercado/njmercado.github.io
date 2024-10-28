'use client'

import { useRouter} from "next/navigation"
import { EMPTY_PROJECT_TEMPLATE, PROJECTS } from "@/constants/projects.constant";
import { useEffect, useState } from "react";
import { URL } from "@/constants/urls.constant";
import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import { useAppDispatch } from "@/lib/store/hooks";
import { setComponent } from "@/lib/store/features/footer/footerSlice";
import { ProjectView } from "@/components";

export interface ProjectProviderProps {
  name: string;
}

export default function ProjectProvider({
  name
}: ProjectProviderProps) {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const [project, setProject] = useState(EMPTY_PROJECT_TEMPLATE as IProjectTemplate);

  const getProject = () => {
    const projectName = name.toUpperCase()
    const gottenProject = PROJECTS.filter(project =>
      project.title.toUpperCase() === projectName
    )[0]

    return gottenProject;
  }

  const isProjectEmpty = (project: any) => project === undefined
  const go404 = () => router.push(URL.NOT_FOUND.MAIN)

  if(isProjectEmpty(getProject())) {
    go404();
  }

  useEffect(() => {
    dispatch(setComponent('cv_button'))

    const project = getProject()

    if (isProjectEmpty(project)) go404()
    else setProject(project)
  }, [])

  return (
    <ProjectView
      title={project?.title ?? ''}
      description={project?.description}
      images={project?.images}
      techs={project?.techs}
      technicalDescription={project?.technicalDescription}
      link={project?.link}
      history={project?.history}
    />
  )
}