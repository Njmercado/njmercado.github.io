import react from 'react';
import Container from '../Container/Container';

export default function Button(props: any) {
  return (
    <Container className={
        props.className + 
        ' hover:bg-black hover:text-white w-full h-full'
    }>
      <button className="w-full h-full">{props.children}</button>
    </Container>
  );
}