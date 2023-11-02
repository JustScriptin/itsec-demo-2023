type TNavCounterProps = {
    count: string;
    description: string;
    icon?: JSX.Element;
  };

const NavCounter: React.FC<TNavCounterProps> = ({ count, description, icon }) => {
    return (
      <div className="flex gap-2 ">
        <span className="">{count}</span>
        <IconLabel icon={icon} label={description} />
      </div>
    );
  };

  type TIconLabelProps = {
    icon?: JSX.Element;
    label: string;
  };
  
  const IconLabel: React.FC<TIconLabelProps> = ({ icon, label }) => {
    return (
      <div className="flex items-center">
        {icon}
        <span className="">{label}</span>
      </div>
    );
  };
  
  export default NavCounter;