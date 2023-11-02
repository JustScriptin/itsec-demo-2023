import {TSvgProps} from '@/types';

const SemiCircleIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={40}
  height={40}
  viewBox="0 0 40 40"
  fill="none"
  {...svgProps}
>
  <circle cx={20} cy={20} r={6} stroke="white" strokeWidth={2} />
  <mask
    id="mask0_167_1568"
    style={{ maskType: "alpha" }}
    maskUnits="userSpaceOnUse"
    x={13}
    y={13}
    width={14}
    height={14}
  >
    <circle cx={20} cy={20} r={7} fill="white" />
  </mask>
  <g mask="url(#mask0_167_1568)">
    <rect x={7} y={20} width={28} height={13} fill="white" />
  </g>
</svg>
 
    )
}

export default SemiCircleIcon;