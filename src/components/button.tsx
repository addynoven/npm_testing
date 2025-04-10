import React from "react";
const button = ({
	className,
	children,
}: {
	className: string;
	children: string;
}) => {
	return <div className={className}>{children}</div>;
};

export default button;
