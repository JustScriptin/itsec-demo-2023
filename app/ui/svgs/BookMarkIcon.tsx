import {TSvgProps} from '@/types';

const BookMarkIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={19}
  height={20}
  viewBox="0 0 19 20"
  fill="none"
  {...svgProps}
>
  <rect width="18.4" height={20} rx={3} fill="#D9D9D9" />
  <path
    d="M8.80005 0H15.2V7.96973C15.2 8.25051 14.8488 8.37742 14.6693 8.16149L12.2308 5.22758C12.1108 5.08326 11.8893 5.08326 11.7693 5.22758L9.33076 8.16149C9.15129 8.37742 8.80005 8.25051 8.80005 7.96973V0Z"
    fill="#15233F"
  />
</svg>

    )
}

export default BookMarkIcon;