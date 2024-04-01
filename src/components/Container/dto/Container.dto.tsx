import { IContainer } from "../";

export default class ContainerDTO implements IContainer {
  width?: number | string;
  height?: number | string;
  children?: any | undefined;
  className?: string | undefined;
  margin?: number = 10;
}