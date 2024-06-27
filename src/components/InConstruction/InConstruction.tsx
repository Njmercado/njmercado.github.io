import { faHandSparkles, faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title, TitleSize } from "@/components"

export default function InConstruction({children}: any) {
  return (
    <article>
      <section>
        <Title
          size={TitleSize.LARGE} 
          value={(
            <article>
              <p>
                Hi visitor <span><FontAwesomeIcon icon={faHandSparkles}/></span>
              </p>
            </article>
          )}
        />
        <p className="mt-10 text-2xl">
          At this moment this view is in construction <span><FontAwesomeIcon icon={faPersonDigging} size={'xl'}/></span>
        </p>
      </section>
      {children}
    </article>
  )
}