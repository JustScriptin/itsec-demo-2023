import {TSvgProps} from '@/types';

const GreenCheckIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={22}
  height={22}
  viewBox="0 0 22 22"
  fill="none"
  {...svgProps}
>
  <circle opacity="0.2" cx={11} cy={11} r={11} fill="#00B41D" />
  <circle cx="11.0001" cy="11.0006" r="8.46154" fill="#00B41D" />
  <rect
    x="13.9854"
    y={7}
    width="3.23381"
    height="8.55909"
    rx="1.61691"
    transform="rotate(43.3907 13.9854 7)"
    fill="#D9D9D9"
  />
  <rect
    x="8.22363"
    y="8.875"
    width="6.13188"
    height="3.23682"
    rx="1.61841"
    transform="rotate(43.3907 8.22363 8.875)"
    fill="#D9D9D9"
  />
</svg>

    )
}

export default GreenCheckIcon;