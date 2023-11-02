import {TSvgProps} from '@/types';

const EllipsesIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  {...svgProps}
>
  <path
    opacity="0.2"
    d="M0 7.84439C0 3.51205 3.51205 0 7.84439 0H8.05752C12.2721 0 15.6888 3.41663 15.6888 7.63126C15.6888 11.8459 12.2721 15.2625 8.05751 15.2625H3.6261C1.62346 15.2625 0 13.6391 0 11.6364V7.84439Z"
    fill="#F3F3F3"
  />
  <circle cx="4.85575" cy="7.85575" r="0.855751" fill="#F3F3F3" />
  <circle cx="8.27872" cy="7.85551" r="0.855751" fill="#F3F3F3" />
  <circle cx="11.7018" cy="7.85551" r="0.855751" fill="#F3F3F3" />
</svg>

    )
}

export default EllipsesIcon;