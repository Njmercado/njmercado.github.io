export enum TitleSize {
  SMALL = 'small',
  NORMAL = 'normal',
  BIG = 'big',
  LARGE = 'large',
  EXTRA_LARGE = 'extra-large',
}

export interface ITitle {
  size: TitleSize;
  value: string | React.JSX.Element;
}

export default function Title({
  size,
  value
}: ITitle) {

  const getHTagGivingSize = (size: TitleSize) => {
    return function hTag(value: string | React.JSX.Element) {
      switch (size) {
        case TitleSize.EXTRA_LARGE:
          return <h1 className="text-5xl font-bold">{value}</h1>
        case TitleSize.LARGE:
          return <h2 className="text-4xl font-bold">{value}</h2>
        case TitleSize.BIG:
          return <h3 className="text-3xl font-bold">{value}</h3>
        case TitleSize.NORMAL:
          return <h4 className="text-2xl font-bold">{value}</h4>
        case TitleSize.SMALL:
          return <h5 className="text-xl font-bold">{value}</h5>
      }
    }
  }

  const generateTitleTag = (size: TitleSize, value: string | React.JSX.Element) => {
    const hTag = getHTagGivingSize(size);
    return hTag(value)
  }

  return (
    generateTitleTag(size, value)
  )
}