import clsx from "clsx";
import styles from "./firm-fact-card.module.scss";

interface FirmFactCardProps {
    variant?: "default" | "border";
    children: React.ReactNode
}
export const FirmFactCard = ({ children, variant = "default" }: FirmFactCardProps) => {

    return (
        <div className={clsx(styles.card, { [styles.border]: variant === "border" })} >
            {children}
        </div>
    )
}
