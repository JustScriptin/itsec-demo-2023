import {TSvgProps} from '@/types';

const MinusIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  {...svgProps}
>
  <rect x={4} y={9} width={12} height={2} rx={1} fill="#D9D9D9" />
</svg>
    )
}

export default MinusIcon;