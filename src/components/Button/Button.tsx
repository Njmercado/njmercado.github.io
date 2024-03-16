import react from 'react';
import Container from '../Container/Container';

export default function Button(props: any) {
  return (
    <Container className={
        ` 
          transition-colors
          hover:bg-black hover:text-white min-w-fit min-h-fit max-w-full max-h-full p-2
          cursor-pointer
        `
        + props.className 
    }>
      {props.children}
    </Container>
  );
}