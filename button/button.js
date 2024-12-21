import {
	jsx as _jsx,
	jsxs as _jsxs,
	Fragment as _Fragment,
} from 'react/jsx-runtime'
import * as React from 'react'
import styles from './button.module.css'
const Button = React.forwardRef(
	(
		{
			className,
			variant = 'default',
			size = 'md',
			loading = false,
			disabled = false,
			onClick,
			children,
			...props
		},
		ref
	) => {
		const parsedVariantStyle = style => {
			switch (style) {
				case 'secondary':
					return styles.secondary
				case 'destructive':
					return styles.destructive
				case 'outline':
					return styles.outline
				case 'ghost':
					return styles.ghost
				case 'link':
					return styles.link
				default:
					return styles.default
			}
		}
		const parsedSizeStyle = style => {
			switch (style) {
				case 'sm':
					return styles.small
				case 'lg':
					return styles.large
				case 'icon':
					return styles.icon
				default:
					return styles.middle
			}
		}
		return _jsx('button', {
			onClick: loading || disabled ? undefined : onClick,
			className: `${styles.button} ${parsedVariantStyle(
				variant
			)} ${parsedSizeStyle(size)} ${className} `,
			ref: ref,
			disabled: loading || disabled,
			...props,
			children: loading
				? _jsxs(_Fragment, {
						children: [
							_jsxs('svg', {
								className: styles.loader,
								xmlns: 'http://www.w3.org/2000/svg',
								width: '24',
								height: '24',
								viewBox: '0 0 24 24',
								children: [
									_jsxs('defs', {
										children: [
											_jsxs('linearGradient', {
												id: 'mingcuteLoadingFill0',
												x1: '50%',
												x2: '50%',
												y1: '5.271%',
												y2: '91.793%',
												children: [
													_jsx('stop', {
														offset: '0%',
														stopColor: 'currentColor',
													}),
													_jsx('stop', {
														offset: '100%',
														stopColor: 'currentColor',
														stopOpacity: '.55',
													}),
												],
											}),
											_jsxs('linearGradient', {
												id: 'mingcuteLoadingFill1',
												x1: '50%',
												x2: '50%',
												y1: '15.24%',
												y2: '87.15%',
												children: [
													_jsx('stop', {
														offset: '0%',
														stopColor: 'currentColor',
														stopOpacity: '0',
													}),
													_jsx('stop', {
														offset: '100%',
														stopColor: 'currentColor',
														stopOpacity: '.55',
													}),
												],
											}),
										],
									}),
									_jsxs('g', {
										fill: 'none',
										children: [
											_jsx('path', {
												d: 'M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z',
											}),
											_jsx('path', {
												fill: 'url(#mingcuteLoadingFill0)',
												d: 'M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021',
												transform: 'translate(1.5 1.625)',
											}),
											_jsx('path', {
												fill: 'url(#mingcuteLoadingFill1)',
												d: 'M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118',
												transform: 'translate(1.5 1.625)',
											}),
										],
									}),
								],
							}),
							_jsx('span', {
								style: { color: 'transparent' },
								children: children ? children : 'Кнопка',
							}),
						],
				  })
				: children
				? children
				: 'Кнопка',
		})
	}
)
Button.displayName = 'Button'
export { Button }
//# sourceMappingURL=button.js.map
