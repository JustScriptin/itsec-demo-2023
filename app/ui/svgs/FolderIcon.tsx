import {TSvgProps} from '@/types';

const FolderIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={15}
  viewBox="0 0 16 15"
  fill="none"
  {...svgProps}
>
  <rect
    x="0.713134"
    y="3.73656"
    width="14.2625"
    height="10.2138"
    rx="1.42625"
    fill="white"
    fillOpacity="0.2"
    stroke="#D2D2D2"
    strokeWidth="1.42625"
  />
  <path
    d="M14.9756 5.15527V3.13938C14.9756 1.95783 14.0178 1 12.8363 1H9.22467C8.04313 1 7.0853 1.95783 7.0853 3.13938V4.03654"
    stroke="#D2D2D2"
    strokeWidth="1.42625"
  />
  <path
    opacity="0.2"
    d="M7.15427 3.65527H15.1543L13.6543 1.15527H9.65427L7.65427 1.65527L7.15427 3.65527Z"
    fill="#D9D9D9"
  />
</svg>
    )
}

export default FolderIcon;