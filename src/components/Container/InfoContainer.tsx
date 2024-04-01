import { InfoContainerDTO, Container } from './';

export default function InfoContainer(props: InfoContainerDTO) {
  return (
      <div
        style={{
          margin: `${props.margin ?? 10}px`,
          ...(props.width && { width: `${props.width}` }),
          ...(props.height && { height: `${props.height}` }),
        }}
        className={ "relative h-full w-full " + props.className }
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
          className={`absolute z-10 bg-gray-500 w-full h-full pointer-events-none`}
        ></Container>
      </div>
  )
}