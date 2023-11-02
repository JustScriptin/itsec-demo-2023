import {TSvgProps} from '@/types';

const BoldPlusIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        {...svgProps}
      >
        <g opacity={1}>
          <path
            d="M9.13232 12.4419V5.82422"
            stroke="#D9D9D9"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M5.82351 9.13281L12.4412 9.13281"
            stroke="#D9D9D9"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle cx={9} cy={9} r={8} stroke="#D9D9D9" strokeWidth={2} />
        </g>
      </svg>
        
    )
}

export default BoldPlusIcon;