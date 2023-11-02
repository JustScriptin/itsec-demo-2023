import {TSvgProps} from '@/types';

const LightBulbIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={14}
  height={14}
  viewBox="0 0 14 14"
  fill="none"
>
  <g filter="url(#filter0_b_167_1863)">
  </g>
  <path
    d="M5.95288 9.92126H8.38482"
    stroke="#D9D9D9"
    strokeWidth="0.5"
    strokeLinecap="round"
  />
  <path
    d="M6.56128 10.8334H7.77725"
    stroke="#D9D9D9"
    strokeWidth="0.5"
    strokeLinecap="round"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.98582 7.51548C9.5985 7.00595 9.98855 6.23789 9.98855 5.37874C9.98855 3.84461 8.7449 2.60095 7.21077 2.60095C5.67664 2.60095 4.43298 3.84461 4.43298 5.37874C4.43298 6.20379 4.79268 6.94483 5.36382 7.45359C5.35167 7.50773 5.34526 7.56403 5.34526 7.62183V7.91588C5.34526 8.33835 5.68774 8.68083 6.11021 8.68083H8.2282C8.65068 8.68083 8.99316 8.33835 8.99316 7.91588V7.62183C8.99316 7.58574 8.99066 7.55024 8.98582 7.51548Z"
    fill="#D9D9D9"
  />
  <defs>
    <filter
      id="filter0_b_167_1863"
      x={-68}
      y={-68}
      width={150}
      height={150}
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImageFix" stdDeviation={34} />
      <feComposite
        in2="SourceAlpha"
        operator="in"
        result="effect1_backgroundBlur_167_1863"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_backgroundBlur_167_1863"
        result="shape"
      />
    </filter>
  </defs>
</svg>

    )
}

export default LightBulbIcon;