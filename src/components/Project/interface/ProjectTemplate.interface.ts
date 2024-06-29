import { IProject } from "./Project.interface"

export interface IProjectTemplate extends IProject {
  link: string
  short: {
    title: string,
    description: string,
    techs: Array<React.JSX.Element>
  }
}

export interface IProjectTemplateWithLink extends IProject {
  link: string
}