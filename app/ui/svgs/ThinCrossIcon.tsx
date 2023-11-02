import {TSvgProps} from '@/types';

const ThinCrossIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={55}
  height={55}
  viewBox="0 0 55 55"
  fill="none"
  {...svgProps}
>
  <path
    d="M35.8745 19.875L20.1258 35.6237"
    stroke="white"
    strokeWidth={2}
    strokeLinecap="round"
  />
  <path
    d="M35.8745 35.623L20.1258 19.8743"
    stroke="white"
    strokeWidth={2}
    strokeLinecap="round"
  />
</svg>
 
    )
}

export default ThinCrossIcon;