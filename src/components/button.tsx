import React from "react";
const button = ({
	className,
	children,
}: {
	className: string;
	children: string;
}) => {
	return (
		<div className={`text-primary-400 bg-secondary-400 ${className}`}>
			{children}
		</div>
	);
};

export default button;
