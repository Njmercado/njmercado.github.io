import { IContainer } from "../";

export default class ContainerDTO implements IContainer {
  width?: number = 16;
  height?: number = 16;
  children?: any | undefined;
  className?: string | undefined;
  margin?: number = 10;
}