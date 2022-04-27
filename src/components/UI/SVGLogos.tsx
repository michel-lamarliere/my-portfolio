import React from 'react';

interface Props {
	fill?: string;
	className?: string;
	onClick?: React.MouseEventHandler;
}

export const LogoML: React.FC<Props> = (props) => {
	return (
		<div onClick={props.onClick} style={{ display: 'grid', placeItems: 'center' }}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 815.35 635.88'
				fill={props.fill}
				className={props.className}
			>
				<g id='Layer_2' data-name='Layer 2'>
					<g id='Layer_1-2' data-name='Layer 1'>
						<polygon points='815.35 354.29 726.71 265.64 697.62 294.82 683.86 308.41 541.77 450.46 399.72 308.41 386.87 295.17 356.54 265.02 267.9 353.7 529.65 615.45 529.39 615.71 541.51 627.7 541.72 627.48 542.12 627.83 562.24 607.74 614.7 555.24 637.25 532.39 637.77 531.83 646.08 523.43 690.4 479.07 690.4 479.24 815.35 354.29' />
						<polygon points='319.42 504.38 177.37 362.29 319.42 220.24 332.66 207.39 362.66 177.21 387 201.55 387.03 201.52 548.09 362.59 564.1 346.79 616.6 294.34 636.68 274.21 636.33 273.82 636.55 273.61 624.56 261.49 624.3 261.75 362.55 0 273.87 88.64 273.89 88.66 12.38 350.17 12.12 349.91 0.13 362.03 0.35 362.25 0 362.64 20.08 382.76 72.58 435.22 95.44 457.77 96 458.29 104.39 466.6 148.76 510.92 148.58 510.92 273.54 635.88 362.18 547.24 333 518.15 319.42 504.38' />
					</g>
				</g>
			</svg>
		</div>
	);
};

LogoML.defaultProps = {
	fill: 'currentColor',
};

interface LogoObj {
	className?: string;
	fill: string;
}

export const LogoGitHub: React.FC<LogoObj> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			viewBox='0 0 24 24'
			className={props.className}
		>
			<path
				d='M12,0A12.047,12.047,0,0,0,0,12,12.455,12.455,0,0,0,9.188,24V20.03a2.889,2.889,0,0,1-3.239-1.441c-.273-.46-.756-.959-1.26-.922l-.124-1.4a2.892,2.892,0,0,1,2.593,1.6,1.555,1.555,0,0,0,.9.772,1.89,1.89,0,0,0,1.181-.1,3.3,3.3,0,0,1,.827-1.691h0C6.942,16.382,5.7,14.724,5.2,13.415a5.506,5.506,0,0,1,.855-5.281A.188.188,0,0,0,6.1,7.989a4.6,4.6,0,0,1,.14-3.073,4.858,4.858,0,0,1,2.663,1l.337.2c.141.084.1.036.238.025A10.182,10.182,0,0,1,12,5.792a10.225,10.225,0,0,1,2.553.363l.109.011c-.01,0,.03-.007.1-.046,2.436-1.476,2.349-.993,3-1.206A4.682,4.682,0,0,1,17.9,7.989c-.071.218,2.112,2.217.9,5.426-.494,1.309-1.74,2.968-4.865,3.434h0a3.086,3.086,0,0,1,.879,2.2V24A12.454,12.454,0,0,0,24,12,12.047,12.047,0,0,0,12,0Z'
				fill={props.fill}
			/>
		</svg>
	);
};

export const LogoMalt: React.FC<LogoObj> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			viewBox='0 0 571.2 571.2'
			className={props.className}
		>
			<path
				d='M285.6,0C127.9,0,0,127.9,0,285.6s127.9,285.6,285.6,285.6s285.6-127.9,285.6-285.6S443.4,0,285.6,0z
			 M286.3,90c32.2,0,44.4,19.2,48.6,40.5c-3,2.3-5.7,4.8-8.3,7.5l-40.3,40.3l-39.5-39.5c-3.1-3.1-6-5.7-9.1-8.3
			C241.9,109.2,254.1,90,286.3,90z M148.1,147.1c31.2-30.9,61.1-10.4,80.8,9.4l39.5,39.5l-13.5,13.5c0,0-108.6,0.3-112.5,0.5
			C130.4,192.1,125.2,170,148.1,147.1L148.1,147.1z M90.1,284.8c0-41.6,35.8-50.4,63.7-50.4h76.1c0,0-95.3,96.1-98.2,98.7
			C110.2,328.8,90.1,316,90.1,284.8z M148.3,422.8c-30.9-31.2-10.4-61,9.4-80.8l186.2-186.2c19.7-19.8,51.2-39,80.8-9.4
			s10.4,61-9.4,80.8L229.1,413.4C209.4,433.2,179.5,454,148.3,422.8z M286,481.2c-30.9,0-43.9-20-48.3-41.6c2.9-2.6,5.7-5.2,8.8-8.3
			l39.5-39.5l40.3,40.3c2.9,2.6,5.5,4.9,8,7.5C329.9,461.2,317.2,481.2,286,481.2z M425,423.6c-29.6,29.4-61,10.4-80.8-9.4
			L303.9,374l13.5-13.5c0,0,108.3-0.3,112.2-0.5C441.9,378.4,447.1,401.5,425,423.6z M417.5,335.5h-75.1c0,0,95.9-96.1,98.2-99
			c21.3,4.1,40.5,16.4,40.5,48.6C481.1,329,445.2,335.5,417.5,335.5L417.5,335.5z'
				fill={props.fill}
			/>
		</svg>
	);
};

export const LogoLinkedin: React.FC<LogoObj> = (props) => {
	return (
		<svg
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			viewBox='0 0 291.319 291.319'
			className={props.className}
		>
			<g>
				<path
					fill={props.fill}
					d='M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
		S65.21,0,145.659,0z'
				/>
				<path
					d='M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
		c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
		s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
		c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z'
				/>
			</g>
		</svg>
	);
};

export const LogoNewTab: React.FC<LogoObj> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			className={props.className}
		>
			<path
				d='M20.571,20.571H3.429V3.429H12V0H0V24H24V12H20.571Z'
				fill={props.fill}
			/>
			<path
				d='M234.785,0V3.429H237.5l-7.359,7.359,2.424,2.424,7.359-7.359V8.571h3.429V0Z'
				transform='translate(-219.356)'
				fill={props.fill}
			/>
		</svg>
	);
};

export const LogoLeftArrow: React.FC<LogoObj> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 254.71 384.3'
			className={props.className}
		>
			<path
				id='Tracé_1'
				data-name='Tracé 1'
				d='M192.05,0l62.22,62.22L233.79,82.65l-9.54,9.65-99.71,99.75,99.71,99.71,9.29,9,21.17,21.28L192.45,384.3,8.69,200.54l-.18.18L.09,192.21l.15-.15L0,191.79l14.1-14.13L51,140.83,67,125l.39-.36,5.89-5.83,31.15-31.12h-.12Z'
				fill={props.fill}
			/>
		</svg>
	);
};

export const LogoRightArrow: React.FC<LogoObj> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 254.71 384.3'
			className={props.className}
		>
			<path
				id='Tracé_1'
				data-name='Tracé 1'
				d='M62.66,0,.44,62.22,20.92,82.65l9.54,9.65,99.71,99.75L30.46,291.76l-9.3,9L0,322.08,62.25,384.3,246,200.54l.18.18,8.42-8.51-.15-.15.24-.27-14.1-14.13-36.86-36.83-16-15.83-.39-.36-5.89-5.83L150.28,87.69h.12Z'
				fill={props.fill}
			/>
		</svg>
	);
};

export const LogoTheme: React.FC<LogoObj> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 277.81 277.81'
			className={props.className}
			style={{ objectFit: 'contain' }}
		>
			<path
				d='M138.91,0C62.32,0,0,62.32,0,138.91s62.32,138.9,138.91,138.9,138.9-62.31,138.9-138.9S215.5,0,138.91,0Zm0,244.28V33.53a105.38,105.38,0,0,1,0,210.75Z'
				fill={props.fill}
			/>
		</svg>
	);
};
