import {TSvgProps} from '@/types';

const AdjustIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={30}
  height={30}
  viewBox="0 0 30 30"
  fill="none"
  {...svgProps}
>
  <path
    d="M20.9999 10.8749H8.99994"
    stroke="#D9D9D9"
    strokeWidth="2.375"
    strokeLinecap="round"
  />
  <circle cx="16.2633" cy="10.6579" r="2.76316" fill="#D9D9D9" />
  <path
    d="M21 19.5001H8.99997"
    stroke="#D9D9D9"
    strokeWidth="2.375"
    strokeLinecap="round"
  />
  <circle cx="13.2633" cy="19.2629" r="2.76316" fill="#D9D9D9" />
</svg>

    )
}

export default AdjustIcon;