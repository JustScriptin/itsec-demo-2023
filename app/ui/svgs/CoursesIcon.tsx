import {TSvgProps} from '@/types';

const CoursesIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={18}
  height={20}
  viewBox="0 0 18 20"
  fill="none"
  {...svgProps}
>
  <rect width={18} height={20} rx={2} fill="white" />
  <rect x={3} y={11} width={12} height={2} rx={1} fill="#13284E" />
  <rect x={3} y={15} width={12} height={2} rx={1} fill="#13284E" />
  <rect x={3} y={3} width={12} height={6} rx={1} fill="#00A4E4" />
</svg>
 
    )
}

export default CoursesIcon;