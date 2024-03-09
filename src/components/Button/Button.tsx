import clsx from 'clsx';
import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "icon",
    children: React.ReactNode
}
export const Button = ({ variant = "default", children, ...props }: ButtonProps) => {
    return (
            <button {...props} className={clsx(styles.button, { [styles.iconButton]: variant === "icon" })} >
                {children}
            </button>
    )
}