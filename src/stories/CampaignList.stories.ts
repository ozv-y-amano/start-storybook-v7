import type { Meta, StoryObj } from "@storybook/react";

import { CampaignList } from "./CampaignList";

const meta = {
	title: "Example/Hapitas/CampaignList",
	component: CampaignList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof CampaignList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopPage: Story = {
	args: {
		label: "お得なキャンペーン開催中♪ 一覧を見る",
		url: "/",
	},
};
