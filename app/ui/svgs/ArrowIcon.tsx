import {TSvgProps} from '@/types';

const ArrowIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={22}
  height={22}
  viewBox="0 0 22 22"
  fill="none"
  {...svgProps}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.68991 10.0175C7.14872 9.41481 6.22141 9.36496 5.61872 9.90615C5.01603 10.4473 4.96617 11.3746 5.50737 11.9773L9.54472 16.4735C10.4467 17.4779 12.0322 17.4406 12.8859 16.3948L16.5348 11.9249C17.047 11.2974 16.9536 10.3735 16.3261 9.86125C15.6986 9.34901 14.7747 9.44245 14.2625 10.0699L12.4654 12.2713L12.4654 5.13044C12.4654 4.32042 11.8088 3.66377 10.9988 3.66377C10.1887 3.66377 9.53209 4.32042 9.53209 5.13044L9.53209 12.069L7.68991 10.0175Z"
    fill="#DADADA"
  />
</svg>

    )
}

export default ArrowIcon;