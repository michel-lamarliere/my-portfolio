import React from 'react';
import classes from './LogoML.module.scss';

interface Props {
	fill?: string;
	className?: string;
	onClick?: React.MouseEventHandler;
}

const LogoML: React.FC<Props> = (props) => {
	return (
		<div className={classes.wrapper} onClick={props.onClick}>
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

export default LogoML;
