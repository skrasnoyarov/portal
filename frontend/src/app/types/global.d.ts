declare module '*.module.css' {
	const classes: Record<string, string>;
	export default classes;
}

declare module '*.module.scss' {
	const classes: Record<string, string>;
	export default classes;
}
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module '*.png';

declare module '*jpg';

declare const __IS_DEV__: boolean;
