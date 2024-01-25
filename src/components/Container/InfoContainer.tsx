import react from 'react';
import { ContainerDTO, Container } from './';

export default function NoteContainer(props: ContainerDTO) {
  return (
      <div
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          margin: `${props.margin ?? 10}px`,
        }}
        className="relative"
      >
        <Container
          className={props.className + ` absolute bg-white z-20 min-w-fit min-h-fit w-full h-full`}
        >
          {props.children}
        </Container>
        <Container
          style={{
            top: '10px', 
            left: '10px', 
          }}
          className={`absolute z-10 bg-gray-100 w-full h-full`}
        ></Container>
      </div>
  )
}