import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';

export default function Header() {
  return (
    <div className="w-full p-2">
      <div>
        <button>a</button>
        <button>A</button>
        <button>big A</button>
      </div>
      {/* <Container className="flex justify-center w-5/6 h-10">
        <Button className="w-1/4 m-0">home</Button>
        <Button className="w-1/4 m-0">about</Button>
        <Button className="w-1/4 m-0">projects</Button>
        <Button className="w-1/4 m-0">menu</Button>
      </Container> */}
    </div>
  )
}
