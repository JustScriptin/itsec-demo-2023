import {TSvgProps} from '@/types';

const CheckMarkIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={13}
  height={11}
  viewBox="0 0 13 11"
  fill="none"
  {...svgProps}
>
  <path
    d="M1.07024 5.92063L4.51093 9.10674L11.6181 1.0749"
    stroke="white"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

    )
}

export default CheckMarkIcon;