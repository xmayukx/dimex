export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  buckets: Buckets[];
}

export interface Buckets {
  name: string;
  id: number;
}
