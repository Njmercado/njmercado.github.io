import { IProject } from "./interface/project";

export default function ProjectItem({
  image,
  title,
  description,
  techs,
}: IProject) {
  return (
    <article className="grid grid-cols-10 h-16 w-full">
      <div className="flex justify-center items-center col-start-1 col-span-2">
        <img
          src={image.src}
          alt={image.alt}
          className="object-fill"
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      <article className="col-start-3 col-span-8">
        <h4 className="text-lg"><span><strong>{title}</strong></span></h4>
        <p className="text-sm">{description}</p>
        <p className="grid grid-cols-3">
          {
            techs.map((tech, index) => {
              return (
                <span key={index} className="text-sm inline"><strong>{tech}</strong></span>
              )
            })
          }
        </p>
      </article>
    </article>
  )
}