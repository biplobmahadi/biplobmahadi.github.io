import { Icon } from "tabler-icons-react";
import { ITableOfContent } from "./tableOfContent.interface";

interface ILinks {
  label: string;
  link: string;
  tableOfContent?: ITableOfContent[];
}

export interface INavbarLinksGroupProps {
  icon: Icon;
  label: string;
  opened: boolean;
  setOpened: Function;
  setTableOfContent?: Function;
  active?: string;
  setActive?: Function;
  eachLink?: string;
  initiallyOpened?: boolean;
  links?: ILinks[];
}
