import {TSvgProps} from '@/types';

const LockIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={40}
  height={40}
  viewBox="0 0 40 40"
  fill="none"
  {...svgProps}
>
  <rect
    x="14.75"
    y="17.7616"
    width="11.1519"
    height="8.48835"
    rx="0.75"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
  />
  <path
    d="M22.6982 17.7445V15.3722C22.6982 14.0621 21.6361 13 20.326 13V13C19.0158 13 17.9537 14.0621 17.9537 15.3722V17.7445"
    stroke="white"
    strokeWidth="1.5"
  />
</svg>
    )
}

export default LockIcon;