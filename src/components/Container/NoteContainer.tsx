import react from 'react';
import Container from './Container';

interface INoteContainer {
  width?: number;
  height?: number;
  children?: any;
  className?: string;
}

class NoteContainerDTO implements INoteContainer {
  width?: number = 16;
  height?: number = 16;
  children?: any | undefined;
  className?: string | undefined;
}

export default function NoteContainer(props: NoteContainerDTO) {
  return (
    <div className="relative">
      <Container
        style={{width: `${props.width}rem`, height: `${props.height}rem`}}
        className={props.className + ` absolute bg-white z-20 min-w-fit`}
      >
        {props.children}
        <Container
          style={{width: `2rem`, height: `2rem`, bottom: '-2px', right: '-2px'}}
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
        style={{width: `${props.width}rem`, height: `${props.height}rem`}}
        className={`absolute z-10 left-3 top-3 bg-gray-100`}
      ></Container>
    </div>
  )
}
