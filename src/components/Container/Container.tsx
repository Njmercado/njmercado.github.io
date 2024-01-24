import React from 'react';

interface ContainerProps {
  className?: any,
  border?: number,
  children?: any,
  style?: object,
}

export default function Container(props: ContainerProps) {
  return (
    <div style={props.style} className={'border-2 border-black text-center ' + props.className}>
      { props.children }
    </div>
  );
}