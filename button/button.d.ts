import * as React from 'react'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'default'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| 'link'
	size?: 'sm' | 'md' | 'lg' | 'icon'
	className?: string
	loading?: boolean
	disabled?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
declare const Button: React.ForwardRefExoticComponent<
	Props & React.RefAttributes<HTMLButtonElement>
>
export { Button }
