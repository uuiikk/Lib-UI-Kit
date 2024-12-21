import { jsx as _jsx } from "react/jsx-runtime";
import styles from './button.module.css';
function Button({ variant = 'default', size = 'md', className, onClick, ...props }) {
    const parsedVariantStyle = (style) => {
        switch (style) {
            case 'secondary':
                return styles.secondary;
            case 'destructive':
                return styles.destructive;
            case 'outline':
                return styles.outline;
            case 'ghost':
                return styles.ghost;
            case 'link':
                return styles.link;
            default:
                return styles.default;
        }
    };
    const parsedSizeStyle = (style) => {
        switch (style) {
            case 'sm':
                return styles.small;
            case 'lg':
                return styles.large;
            case 'icon':
                return styles.icon;
            default:
                return styles.middle;
        }
    };
    return (_jsx("button", { onClick: onClick, className: `${styles.button} ${parsedVariantStyle(variant)} ${parsedSizeStyle(size)} ${className}`, ...props }));
}
export { Button };
//# sourceMappingURL=button.js.map