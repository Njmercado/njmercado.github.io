import react from 'react';
import { InfoContainerDTO, Container } from './';

export default function InfoContainer(props: InfoContainerDTO) {
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
          <div>{props.header}</div>
          <div className='h-fit'>{props.body}</div>
          <div className='absolute bottom-0 w-full'>{props.footer}</div>
        </Container>
        <Container
          style={{
            top: '10px', 
            left: '10px', 
          }}
          className={`absolute z-10 bg-gray-300 w-full h-full`}
        ></Container>
      </div>
  )
}