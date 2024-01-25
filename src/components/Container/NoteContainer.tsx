import react from 'react';
import { ContainerDTO, Container } from './';

export default function NoteContainer(props: ContainerDTO) {
  return (
      <div
        style={{ width: `${props.width}px`, height: `${props.height}px`, margin: `${props.margin ?? 10}px`}}
        className="relative"
      >
        <Container
          className={props.className + ` absolute bg-white z-20 w-full h-full`}
        >
          {props.children}
          <Container
            style={{ width: `2rem`, height: `2rem`, bottom: '-2px', right: '-2px' }}
            className={`
            absolute z-20
            border-t-black
            border-l-black
            border-r-gray-100
            border-b-gray-100
            bg-gray-100
          `}
          >
            <div style={{
              borderBottom: '2px solid black',
              transform: 'rotate(-45deg)',
              transformOrigin: 'bottom left',
              width: '2.6rem',
              height: '100%'
            }}
            ></div>
          </Container>
        </Container>
        <Container
          style={{
            top: '10px', 
            left: '10px', 
          }}
          className={`absolute z-10 left-3 top-3 bg-gray-100 w-full h-full`}
        ></Container>
      </div>
  )
}
