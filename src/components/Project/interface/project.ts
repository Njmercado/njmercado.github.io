export type Image = {
  src: string;
  alt: string;
}

export interface IProject {
  image: Image;
  title: string;
  description: string;
  techs: Array<string>;
}

export interface IProjectTemplate extends IProject {
  short: {
    title: string,
    description: string,
    techs: Array<string>
  }
}

export type ProjectData = {
  projects: Array<IProjectTemplate>
}