import {TSvgProps} from '@/types';

const TabletIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={13}
  viewBox="0 0 16 13"
  fill="none"
  {...svgProps}
>
  <rect
    opacity="0.2"
    y="0.368164"
    width={16}
    height={12}
    rx="2.13938"
    fill="#D9D9D9"
  />
  <mask id="path-2-inside-1_167_1753" fill="white">
    <rect x={3} y="3.36804" width={10} height={6} rx="1.42625" />
  </mask>
  <rect
    x={3}
    y="3.36804"
    width={10}
    height={6}
    rx="1.42625"
    stroke="#F3F3F3"
    strokeWidth={4}
    strokeLinejoin="round"
    mask="url(#path-2-inside-1_167_1753)"
  />
</svg>
 
    )
}

export default TabletIcon;