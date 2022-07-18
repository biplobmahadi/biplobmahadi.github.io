export interface ITableOfContent {
  label: string;
  link: string;
  order: number;
}

export interface ITableOfContentProps {
  links: ITableOfContent[];
}
