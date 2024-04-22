import React from 'react';


export default function Footer(props: any) {
  return (
    <div className={"bg-gray-300 grid grid-cols-10 " + props.className }>
      <div className="col-span-2 flex flex-row items-center">menu</div>
      <div className="col-span-6">
        <div className="flex flex-row justify-center items-center h-full">
          <div className='mx-2'>{"|<"}</div>
          <div className='mx-2'>{"||"}</div>
          <div className='mx-2'>{">|"}</div>
        </div>
      </div>
      <div className="col-span-2 flex flex-row items-center">custom items</div>
    </div>
  )
}