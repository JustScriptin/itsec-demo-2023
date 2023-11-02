import {TSvgProps} from '@/types';

const TriangleIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  {...svgProps}
>
  <path
    d="M13.4765 8.96888L9.07786 6.03647C8.41331 5.59343 7.52316 6.06982 7.52316 6.86852L7.52316 10L7.52316 13.0266C7.52316 13.8457 8.454 14.3174 9.11452 13.833L13.5131 10.6073C14.0732 10.1966 14.0543 9.35413 13.4765 8.96888Z"
    fill="#D9D9D9"
  />
</svg>

    )
}

export default TriangleIcon;