import { ContainerDTO } from "..";

export default class ImgContainerDTO extends ContainerDTO {
  src: string | undefined;
  horizontal: boolean = false
  textInside: boolean = false
}