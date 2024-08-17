import { IGeneral } from '@/interfaces/general.interface';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export enum Action {
  LINK = 'link',
  FUNC = 'function',
}

export interface IButton extends IGeneral {
  url?: string;
  onClick?: Function;
  type?: Action;
  external?: boolean;
  submit?: boolean;
  disabled?: boolean
}

export class ButtonDTO implements IButton {
  url?: string = "";
  onClick?: Function;
  type?: Action = Action.FUNC;
  className?: string | undefined;
  value: ReactNode = "";
  submit?: boolean | undefined = false;
  disabled?: boolean = false
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
      disabled={props.disabled}
      type={props.submit ? 'submit' : 'button'}
      onClick={action}
      className={
        'm-0 bg-gray-400 text-white hover:bg-gray-500 transition-all rounded-md p-0.5 hover:shadow-md hover:shadow-gray-600 hover:-translate-y-1 ' +
        (props.className ?? '')
      }
    >
      {props.value}
    </button>
  );
}