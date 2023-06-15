import "./campaignListButton.css";

type Props = {
	label: string;
	url: string;
};

export const CampaignListButton = ({
	label,
	url = "/special/campaign",
}: Props) => {
	return (
		<div>
			<p className={"campaignListButton"}>
				<a className={"campaignListButtonText"} href={url}>
					{label}
				</a>
			</p>
		</div>
	);
};
