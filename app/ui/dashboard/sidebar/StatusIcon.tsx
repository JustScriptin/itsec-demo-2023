import { GreenCheckIcon, RedXIcon } from "../../svgs"

type TStatusIconProps = {
    type: "green" | "red"
}

const StatusIcon: React.FC<TStatusIconProps> = ({type}) => {
    return (
        <>
        {type === "green"
        ? <GreenCheckIcon />
        : <RedXIcon />
    }
    </>
    )
}