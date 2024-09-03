import { ProjectProvider } from "@/components";

export function generateStaticParams() {
  const pages = ['Kribi', 'kribi', 'drata', 'Drata', 'neumomed', 'Neumomed', 'nuvu', 'Nuvu'];
  return pages.map((page) => ({ project: page }));
}

export default function ProjectContainer({params}: {params: {project: string}}) {

  const {project} = params;

  return (
    <ProjectProvider name={project}/>
  )
}