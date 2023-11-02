import LabeledIcon from "../../LabeledIcon";
import { ExclamationMarkIcon, SettingsIcons } from "../../svgs";
import NavCounter from "./NavCounter";
import { VirtualHangarLogo } from "../../svgs";
import student from "@/public/assets/student.png";
import Image from "next/image";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between p-6 bg-blue-500">
            <VirtualHangarLogo />
            <div className="flex items-center gap-28">
            <div className="flex gap-5 ">
            <NavCounter count="1" description="Active Sessions" />
            <NavCounter count="2" description="Total Active Users" />
            </div>
            <div className="flex items-center gap-5">
            <LabeledIcon icon={<ExclamationMarkIcon/>} label="Dashboard" vertical/>
            <LabeledIcon icon={<SettingsIcons/>} label="Dashboard" vertical/>
            <Image src={student} alt="student" width="50" height="50" />
            </div>
            </div>
        </nav>
    );
  };

export default Nav;