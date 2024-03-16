import { Container, ImgContainerDTO } from '.'

export default function ImgContainer(props: ImgContainerDTO) {
  if (props.horizontal && props.textInside) {
    return (
      <Container>
        <div className="p-1 grid grid-cols-2">
          <img src={props.src}/>
          <div>
            {props.children}
          </div>
        </div>
      </Container>
    )
  } else {
    return (
      <div>
        <Container className={props.className + ' p-1'}>
          <img src={props.src} />
        </Container>
        <div>
          { props.children }
        </div>
      </div>
    )
  }
}