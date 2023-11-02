import type { ComponentType } from 'react';

type LabeledIconProps = {
  icon: JSX.Element;
  label: string;
  vertical: boolean;
}

const LabeledIcon: React.FC<LabeledIconProps> = ({ icon, label, vertical = false }) => {
  const directionClass = vertical ? 'flex-col' : 'flex-row'; 
  const alignmentClass = vertical ? 'items-start' : 'items-center';

  return (
    <div className={`flex ${directionClass} ${alignmentClass} gap-2`}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default LabeledIcon;