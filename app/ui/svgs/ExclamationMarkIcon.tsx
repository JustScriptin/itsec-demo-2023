import {TSvgProps} from '@/types';

const ExclamationMarkIcon = ({svgProps}: TSvgProps) => {
    return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  {...svgProps}
>
  <rect width="19.0476" height={20} rx={4} fill="#949DA7" />
  <rect
    x="7.6189"
    y="2.85693"
    width="3.80952"
    height="9.52381"
    rx="1.90476"
    fill="#010517"
  />
  <rect
    x="7.6189"
    y="13.333"
    width="3.80952"
    height="3.80952"
    rx="1.90476"
    fill="#010517"
  />
</svg>
    )
}

export default ExclamationMarkIcon;