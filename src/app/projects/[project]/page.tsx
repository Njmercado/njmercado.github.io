import { ProjectProvider } from "@/components";

export function generateStaticParams() {
  const pages = ['Kribi', 'drata', 'Drata', 'neumomed', 'Neumomed'];
  return pages.map((page) => ({ project: page }));
}

export default function ProjectContainer({params}: {params: {project: string}}) {

  const {project} = params;

  return (
    <ProjectProvider name={project}/>
  )
}