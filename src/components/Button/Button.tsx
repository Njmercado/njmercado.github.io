import { useRouter } from 'next/navigation';

export enum Action {
  LINK = 'link',
  FUNC = 'function',
}

export interface IButton {
  url?: string;
  onClick?: Function;
  type: Action;
  text?: string;
}

export class ButtonDTO implements IButton{
  url?: string = "";
  onClick?: Function;
  type: Action = Action.FUNC;
  text?: string = "";
}

export default function Button(props: ButtonDTO) {
  const router = useRouter()

  function action() {
    switch (props.type) {
      case Action.LINK:
        router.push(props.url as string)
      case Action.FUNC:
        props.onClick?.call(null)
    }
  }

  return (
    <button onClick={action} className='m-0'>
      <span className='bg-gray-500 text-white ml-2 rounded-sm p-0.5'>{props.text}</span>
    </button>
  );
}