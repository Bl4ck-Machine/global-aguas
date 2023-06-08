interface ISidebar {
  description: string;
  src: string;
  link: string;
  state: boolean | string;
  icon?: boolean 
  iconFrag?: React.ReactFragment 
}