interface IFooterNavProps {
  title: string;
  onClickHandler: Function;
}

export interface ILandingFooterProps {
  title: string;
  footerNavList: IFooterNavProps[];
}
