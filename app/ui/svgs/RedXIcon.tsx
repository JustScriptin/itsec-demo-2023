import {TSvgProps} from '@/types';

const RedXIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        {...svgProps}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.2" cx={11} cy={11} r={11} fill="#CC3462" />
        <circle cx="11.0001" cy="11.0001" r="8.46154" fill="#CC3462" />
        <rect
          x="12.8799"
          y={7}
          width="3.23381"
          height="8.55909"
          rx="1.61691"
          transform="rotate(43.3907 12.8799 7)"
          fill="#D9D9D9"
        />
        <rect
          width="3.23381"
          height="8.55909"
          rx="1.61691"
          transform="matrix(-0.726686 0.686969 0.686969 0.726686 9.3501 7)"
          fill="#D9D9D9"
        />
      </svg>
         
    )
}

export default RedXIcon;