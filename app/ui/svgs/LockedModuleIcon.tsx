import {TSvgProps} from '@/types';

const LockedModuleIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={70}
  height={70}
  viewBox="0 0 70 70"
  fill="none"
  {...svgProps}
>
  <circle cx={35} cy={35} r={35} fill="#3A4F7A" />
  <circle
    cx={35}
    cy={35}
    r={34}
    stroke="#00A4E4"
    strokeOpacity="0.8"
    strokeWidth={2}
  />
  <path
    d="M41.1057 32.2105V26.1053C41.1057 22.7334 38.3722 20 35.0004 20V20C31.6286 20 28.8951 22.7334 28.8951 26.1053V32.2105"
    stroke="#DADADA"
    strokeWidth={3}
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M23 30.8887C23 30.3364 23.4477 29.8887 24 29.8887H46C46.5523 29.8887 47 30.3364 47 30.8887V48.8887C47 49.441 46.5523 49.8887 46 49.8887H24C23.4477 49.8887 23 49.441 23 48.8887V30.8887ZM36.5013 40.5815C37.4366 40.0645 38.0699 39.0681 38.0699 37.9237C38.0699 36.2477 36.7112 34.8889 35.0351 34.8889C33.359 34.8889 32.0003 36.2477 32.0003 37.9237C32.0003 39.0403 32.6032 40.016 33.5013 40.543V43.3889C33.5013 44.2174 34.1728 44.8889 35.0013 44.8889C35.8297 44.8889 36.5013 44.2174 36.5013 43.3889V40.5815Z"
    fill="#D9D9D9"
  />
</svg>

    )
}

export default LockedModuleIcon;