import {TSvgProps} from '@/types';

const InstallIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={14}
  height={12}
  viewBox="0 0 14 12"
  fill="none"
  {...svgProps}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M1.55556 0C0.696446 0 0 0.696446 0 1.55556V10.4444C0 11.3036 0.696446 12 1.55556 12H12.4444C13.3036 12 14 11.3036 14 10.4444V1.55556C14 0.696446 13.3036 0 12.4444 0H1.55556ZM2.54416 2C2.24363 2 2 2.24363 2 2.54416V9.45584C2 9.75637 2.24363 10 2.54416 10H11.4558C11.7564 10 12 9.75637 12 9.45584V2.54416C12 2.24363 11.7564 2 11.4558 2H2.54416Z"
    fill="#D9D9D9"
  />
  <circle cx="9.99988" cy={6} r={1} fill="#D9D9D9" />
</svg>
             
    )
}

export default InstallIcon;