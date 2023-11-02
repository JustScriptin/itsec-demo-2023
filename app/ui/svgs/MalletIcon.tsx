import {TSvgProps} from '@/types';

const MalletIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={30}
  height={30}
  viewBox="0 0 30 30"
  fill="none"
  {...svgProps}
>
  <rect
    x={13}
    y={6}
    width="12.2249"
    height="6.51994"
    rx={2}
    transform="rotate(30 13 6)"
    fill="#D9D9D9"
  />
  <rect
    x="17.2348"
    y="8.44507"
    width="2.44498"
    height="14.6699"
    rx="1.22249"
    transform="rotate(30 17.2348 8.44507)"
    fill="#D9D9D9"
  />
</svg>
 
    )
}

export default MalletIcon;