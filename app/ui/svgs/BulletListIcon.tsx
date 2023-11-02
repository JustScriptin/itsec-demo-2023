import {TSvgProps} from '@/types';

const BulletListIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={15}
  height={17}
  viewBox="0 0 15 17"
  fill="none"
  {...svgProps}
>
  <rect opacity="0.2" width="14.9756" height="16.4019" rx={1} fill="#D9D9D9" />
  <rect
    x="2.85254"
    y="3.99976"
    width="2.5177"
    height="2.5177"
    rx="0.359672"
    fill="#D9D9D9"
  />
  <path
    d="M6.5387 5.16821H12.2035"
    stroke="#F3F3F3"
    strokeWidth="0.713126"
    strokeLinecap="round"
  />
  <rect
    x="2.85254"
    y="9.51733"
    width="2.5177"
    height="2.5177"
    rx="0.359672"
    fill="#D9D9D9"
  />
  <path
    d="M6.5387 10.7759H12.2035"
    stroke="#F3F3F3"
    strokeWidth="0.713126"
    strokeLinecap="round"
  />
</svg>
 
    )
}

export default BulletListIcon;