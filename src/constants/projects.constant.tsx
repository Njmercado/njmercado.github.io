import { IProjectTemplate } from "@/components/Project/interface/ProjectTemplate.interface";
import { faAws, faDigitalOcean, faDocker, faEnvira, faGithub, faGitlab, faGoogle, faNodeJs, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PROJECTS = [
  {
    title: 'Kribi',
    description: () => (
      <span>
        It is a <strong>Dictionary</strong> which is the result of various research projects for <strong>Palenque's</strong> language.
        Kribí seeks to maintain and democratize the Palenque language to anyone who wishes
        to obtain knowledge from a wide range of articles, games, phrases, words and letters.
      </span>
    ),
    techs: [
      <FontAwesomeIcon icon={faVuejs} size="4x" key={1} />,
      <FontAwesomeIcon icon={faEnvira} size="4x" key={2} />,
      <FontAwesomeIcon icon={faNodeJs} size="4x" key={3} />,
      <FontAwesomeIcon icon={faDigitalOcean} size="4x" key={4} />,
      <FontAwesomeIcon icon={faGithub} size="4x" key={5} />,
      <FontAwesomeIcon icon={faDocker} size="4x" key={6} />,
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
    // link: "http://www.kribi.com.co",
    link: "https://kribiapp.netlify.app",
    short: {
      title: 'Kribi',
      description: 'Dictionary of Colombian Palenque indigenous language',
      techs: [
        <em key={1}><strong>Vue</strong></em>,
        <em key={2}><strong>Vuetify</strong></em>,
        <em key={3}><strong>Nodejs</strong></em>,
        <em key={4}><strong>Digital Ocean</strong></em>,
        <em key={5}><strong>Github</strong></em>,
        <em key={6}><strong>Docker</strong></em>,
      ],
    },
    history: [],
    technicalDescription: () => (
      <span>
        This project was developed in <strong>Vuejs</strong> as Frontend Framework with the help of <strong>Vuetify</strong>
        to develop components and use of its CSS library.
        <br />
        For the Backend was used <strong>Express</strong> with <strong>MongoDB</strong> to handle the business logic.
        <br />
        And for the constant development was used <strong>Digital Ocean</strong>, <strong>Docker</strong> and <strong>Github Actions</strong>
        to serve, manage the projects and dependencies, and version the changes.
      </span>
    ),
  } as IProjectTemplate,
  {
    title: 'Nuvu',
    description: () => (
      <span>Enterprise who design and distribute products developed with AI as their base. This enterrpise works along with a bunch of large companies developing fast and efficient solutions.</span>
    ),
    techs: [
      <FontAwesomeIcon icon={faReact} size="4x" key={1}/>,
      <FontAwesomeIcon icon={faDocker} size="4x" key={3}/>,
      <FontAwesomeIcon icon={faAws} size="4x" key={4}/>,
      <FontAwesomeIcon icon={faPython} size="4x" key={4}/>,
      <FontAwesomeIcon icon={faRobot} size="4x" key={4}/>,
    ],
    images: [
      {
        src: '',
        alt: ''
      },
    ],
    link: 'https://nuvu.com.co/',
    short: {
      title: 'Nuvu - Corporate project',
      description: 'Enterprise focused in AI and Machine Learning',
      techs: [
        <em key={1}><strong>React</strong></em>,
        <em key={3}><strong>Docker</strong></em>,
        <em key={4}><strong>AWS</strong></em>,
        <em key={5}><strong>Python</strong></em>,
      ],
    },
    technicalDescription: () => (
      <span>
        Worked as a FullStack developer fixing and implementing new features in <strong>React</strong> and <strong>NodeJs</strong>. Helped a lot developing new data transmition design patters to improve performance and organization.
        As this is a Company project I can not say too much about it, but for sure this was a so challenging project where a ton of knowledge was gotten.
      </span>
    )
  },
  {
    title: 'Drata',
    description: () => (
      <span>Enterprise focused in creation of automated tools to handle audit based on some specific frameworks like <strong>SOC 2</strong> and <strong>ISO 27001</strong>.</span>
    ),
    techs: [
      <FontAwesomeIcon icon={faReact} size="4x" key={1}/>,
      <FontAwesomeIcon icon={faNodeJs} size="4x" key={2}/>,
      <FontAwesomeIcon icon={faDocker} size="4x" key={3}/>,
      <FontAwesomeIcon icon={faGithub} size="4x" key={4}/>,
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
        <em key={1}><strong>React</strong></em>,
        <em key={2}><strong>Nest Js</strong></em>,
        <em key={3}><strong>Docker</strong></em>,
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
      <FontAwesomeIcon icon={faVuejs} size="4x" key={1}/>,
      <FontAwesomeIcon icon={faNodeJs} size="4x" key={2}/>,
      <FontAwesomeIcon icon={faDocker} size="4x" key={3}/>,
      <FontAwesomeIcon icon={faGoogle} size="4x" key={4}/>,
      <FontAwesomeIcon icon={faGitlab} size="4x" key={5}/>,
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
        <em key={1}><strong>Vue</strong></em>,
        <em key={2}><strong>Nest Js</strong></em>,
        <em key={3}><strong>Docker</strong></em>,
        <em key={4}><strong>GCP</strong></em>,
        <em key={5}><strong>Gitlab</strong></em>,
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