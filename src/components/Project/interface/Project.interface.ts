import { Image } from "../type/Image.type";

export interface IProject {
  images: Array<Image>;
  title: string;
  description: () => React.JSX.Element;
  techs: Array<React.JSX.Element>;
  history?: Array<React.JSX.Element>;
  technicalDescription?: () => React.JSX.Element;
}

export interface IShortProject extends Omit<IProject, 'history' | 'technicalDescription' | 'images' | 'description'> {
  image: Image;
  description: string;
}