import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import { faDigitalOcean, faDocker, faEnvira, faGithub, faNodeJs, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PROJECTS = [
  {
    title: 'Kribi',
    description: () => (
      <span>
        Es un <strong>Diccionario</strong> el cual es el resultado de diversos proyectos de investigación sobre la lengua <strong>Palenquera</strong>.
        Kribí busca mantener y democratizar la lengua Palenque a todo aquel que desee
        obtener conocimiento desde una amplia gama de articulos, juegos, frases, palabras y letras.
      </span>
    ),
    techs: [
      <FontAwesomeIcon icon={faVuejs} size="4x" />,
      <FontAwesomeIcon icon={faEnvira} size="4x" />,
      <FontAwesomeIcon icon={faNodeJs} size="4x" />,
      <FontAwesomeIcon icon={faDigitalOcean} size="4x" />,
      <FontAwesomeIcon icon={faGithub} size="4x" />,
      <FontAwesomeIcon icon={faDocker} size="4x" />,
    ],
    images: [
      {
        src: '/static/kribi/1.png',
        alt: ''
      },
      {
        src: '/static/kribi/2.png',
        alt: ''
      },
      {
        src: '/static/kribi/3.png',
        alt: ''
      },
      {
        src: '/static/kribi/4.png',
        alt: ''
      }
    ],
    link: "http://www.kribi.com.co",
    short: {
      title: 'Kribi',
      description: 'Dictionary of Colombian Palenque indigenous language',
      techs: [
        <em><strong>Vue</strong></em>,
        <em><strong>Vuetify</strong></em>,
        <em><strong>Nodejs</strong></em>,
        <em><strong>Digital Ocean</strong></em>,
        <em><strong>Github</strong></em>,
        <em><strong>Docker</strong></em>,
      ],
    },
    history: [],
    technicalDescription: () => (
      <span>
        Este proyecto se desarrolló en<strong>Vuejs</strong>como Framework de Frontend y se complementó con<strong>Vuetify</strong>
        como ayuda para el desarrollo de componentes y uso de de su librería<strong>CSS</strong>.
        <br />
        Para el Backend se optó por usar<strong>Express</strong>con<strong>MongoDB</strong>para el manejo de la lógica de negocio.
        <br />
        Y para el manejo del desarrollo constante se usó <strong>Digital Ocean</strong>, <strong>Docker</strong> y <strong>Github Actions</strong>
        para servir, manejar los proyectos, y dependencias, y por ultimo versionar los cambios.
      </span>
    ),
  } as IProjectTemplate,
  {
    title: 'Ola',
    description: () => (
      <span>hola soy un componente de la descripción de Ola</span>
    ),
    techs: [
      <FontAwesomeIcon icon={faReact} />
    ],
    images: [{
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8oXL5shgiDpj8G8lScZ5KCQuw6iJXDFMF64wod6b_g&s',
      alt: ''
    }],
    link: "project/ola",
    short: {
      title: 'Ola',
      description: 'Social media to chat with others',
      techs: [
        <FontAwesomeIcon icon={faReact} />
      ],
    },
    history: [],
    technicalDescription: () => (
      <div>Empty technical description</div>
    ),
  } as IProjectTemplate,
]

export const EMPTY_PROJECT_TEMPLATE = {
  title: '',
  description: () => <span>Empty description</span>,
  techs: [],
  images: [],
  link: '',
  technicalDescription: () => <span>Empty technical description</span>,
  history: [],
  short: {
    title: '',
    description: '',
    techs: []
  }
}