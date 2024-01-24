import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';

export default function Header() {
  return (
    <div className="flex flex-col justify-center h-40 w-full items-center">
      <Container className="flex justify-center w-5/6 h-10">
        <Button className="w-1/4">home</Button>
        <Button className="w-1/4">about</Button>
        <Button className="w-1/4">projects</Button>
        <Button className="w-1/4">menu</Button>
      </Container>
    </div>
  )
}
