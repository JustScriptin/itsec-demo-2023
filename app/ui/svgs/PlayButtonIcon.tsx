import {TSvgProps} from '@/types';

const PlayButtonIcon = ({svgProps}: TSvgProps) => {
return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={17}
  height={13}
  viewBox="0 0 17 13"
  fill="none"
  {...svgProps}
>
  <rect
    opacity="0.2"
    width="16.4019"
    height="12.1231"
    rx="2.13938"
    fill="#D9D9D9"
  />
  <path
    d="M11.0534 5.44377C11.5289 5.71825 11.5289 6.40446 11.0534 6.67894L7.30953 8.84049C6.83411 9.11497 6.23984 8.77187 6.23984 8.2229L6.23984 3.8998C6.23984 3.35084 6.83411 3.00774 7.30953 3.28222L11.0534 5.44377Z"
    fill="#D9D9D9"
  />
</svg>

)
};

export default PlayButtonIcon;