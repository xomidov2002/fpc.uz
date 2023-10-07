interface SubMenu{
  name: string,
  route: string
}
export interface NavLink {
  id: number,
  name: string,
  route: string
}
export interface Chooses {
  id: number,
  icon: string,
  num: string,
  name: string
}
export interface Cards {
  id: number,
  icon: string,
  hover: string,
  title: string,
  subtitle: string
}
export interface PracticeCards {
  title: string,
  subtitle: string,
  img: string
}
export interface IntouchCards {
  icon: string,
  hoverIcon: string,
  subtitle: string,
  title: string
}