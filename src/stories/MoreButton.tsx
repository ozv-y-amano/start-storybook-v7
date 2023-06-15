import "./MoreButton.css";

type Props = {
	label: string;
	url: string;
};

export const MoreButton = ({ label, url }: Props) => {
	return (
		<a className={"moreButton"} href={url}>
			{label}
		</a>
	);
};
