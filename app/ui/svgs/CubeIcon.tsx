import {TSvgProps} from '@/types';

const CubeIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={22}
  viewBox="0 0 20 22"
  fill="none"
  {...svgProps}
>
  <rect
    width="9.99994"
    height="9.99994"
    rx="0.686275"
    transform="matrix(0.866025 0.5 -0.866025 0.5 9.66016 0)"
    fill="#00A4E4"
  />
  <rect
    width="9.99994"
    height="9.99994"
    rx="0.686275"
    transform="matrix(0.866025 0.5 0 1 0 7)"
    fill="white"
  />
  <rect
    width="9.99994"
    height="9.99994"
    rx="0.686275"
    transform="matrix(0.866025 -0.5 0 1 10.6602 12)"
    fill="#00A4E4"
  />
</svg> 
    )
}

export default CubeIcon;