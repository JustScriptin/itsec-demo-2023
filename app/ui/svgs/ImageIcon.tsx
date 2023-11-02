import {TSvgProps} from '@/types';

const ImageIcon = ({svgProps}: TSvgProps) => {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={14}
  height={14}
  viewBox="0 0 14 14"
  fill="none"
  {...svgProps}
>
  <rect opacity="0.2" width={14} height={14} rx={2} fill="#D9D9D9" />
  <circle cx={10} cy={4} r={2} fill="#D9D9D9" />
  <path
    d="M9.8959 7.93207L11.6226 11.2703C11.7947 11.6031 11.5531 12 11.1785 12H2.70131C2.35786 12 2.11666 11.6617 2.22862 11.337L4.36558 5.13982C4.51073 4.71889 5.09224 4.68334 5.28758 5.08346L7.11366 8.82379C7.263 9.12969 7.6677 9.20017 7.91166 8.96278L9.10309 7.80343C9.34358 7.56943 9.74174 7.63403 9.8959 7.93207Z"
    fill="#D9D9D9"
  />
</svg>
 
    )
}

export default ImageIcon;