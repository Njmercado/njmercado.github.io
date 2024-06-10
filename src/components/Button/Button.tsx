import { IGeneral } from '@/interfaces/general.interface';
import { useRouter } from 'next/navigation';

export enum Action {
  LINK = 'link',
  FUNC = 'function',
}

export interface IButton extends IGeneral {
  url?: string;
  onClick?: Function;
  type?: Action;
  external?: boolean;
}

export class ButtonDTO implements IButton {
  url?: string = "";
  onClick?: Function;
  type?: Action = Action.FUNC;
  value: string = "";
  className?: string | undefined;
}

export default function Button(props: ButtonDTO) {
  const router = useRouter()

  function action() {
    switch (props.type) {
      case Action.LINK:
        router.push(props.url as string)
      case Action.FUNC:
      default:
        props.onClick?.call(null)
    }
  }

  return (
    <button
      onClick={action}
      className={
        'm-0 bg-gray-500 text-white ml-2 hover:bg-gray-700 transition-colors rounded-md p-0.5 ' + 
        (props.className ?? '')
      }
    >
      {props.value}
    </button>
  );
}