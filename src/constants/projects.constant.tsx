import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import { faDigitalOcean, faDocker, faEnvira, faGithub, faGitlab, faGoogle, faNodeJs, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
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
    title: 'Drata',
    description: () => (
      <span>Enterprise focused in creation of automated tools to handle audit based on some specific frameworks like <strong>SOC 2</strong> and <strong>ISO 27001</strong>.</span>
    ),
    techs: [
      <FontAwesomeIcon icon={faReact} size="4x"/>,
      <FontAwesomeIcon icon={faNodeJs} size="4x"/>,
      <FontAwesomeIcon icon={faDocker} size="4x"/>,
      <FontAwesomeIcon icon={faGithub} size="4x"/>,
    ],
    images: [{
      src: '/static/drata/1.png',
      alt: ''
    }],
    link: 'https://drata.com/',
    short: {
      title: 'Drata - Corporate project',
      description: 'Environment developed to build automated complicance processes',
      techs: [
        <em><strong>React</strong></em>,
        <em><strong>Nest Js</strong></em>,
        <em><strong>Docker</strong></em>,
      ],
    },
    technicalDescription: () => (
      <span>
        Worked as a FullStack developer fixing and implementing new features in <strong>React</strong> and <strong>NestJs</strong>. Helped a lot developing new data transmition design patters to improve performance and organization.
        As this is a Company project I can not say too much about it, but for sure this was a so challenging project where a ton of knowledge is gotten.
      </span>
    ),
  } as IProjectTemplate,
  {
    title: 'Neumomed',
    description: () => (
      <span>
        This is a administrative project to handle pattients and respiratory/sleeping especialists. 
        This project look for to make easier traitments toward patients handling appointments, payments and communication.
      </span>
    ),
    techs: [
      <FontAwesomeIcon icon={faVuejs} size="4x"/>,
      <FontAwesomeIcon icon={faNodeJs} size="4x"/>,
      <FontAwesomeIcon icon={faDocker} size="4x"/>,
      <FontAwesomeIcon icon={faGoogle} size="4x"/>,
      <FontAwesomeIcon icon={faGitlab} size="4x"/>,
    ],
    images: [{
      src: '/static/neumomed/1.png',
      alt: ''
    }],
    link: 'https://neumomed.com/',
    short: {
      title: 'Neumomed - Corporate project',
      description: 'Especialized medical center to trait sleeping and respiratory disorders',
      techs: [
        <em><strong>Vue</strong></em>,
        <em><strong>Nest Js</strong></em>,
        <em><strong>Docker</strong></em>,
        <em><strong>GCP</strong></em>,
        <em><strong>Gitlab</strong></em>,
      ],
    },
    technicalDescription: () => (
      <span>
        Worked mostly as a <strong>Backend Dev</strong> developed and fixed a ton of services and microservices which were created in <strong>NestJs</strong>.
        As This is a company project I can not talk about it, but with 2+ years of experience with <strong>Vue</strong> I gain a lot of experience and went deeper into my career path.
      </span>
    ),
  } as IProjectTemplate
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