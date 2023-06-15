import type { Meta, StoryObj } from "@storybook/react";

import { CampaignListButton } from "./CampaignListButton";

const meta = {
	title: "Example/Hapitas/CampaignListButton",
	component: CampaignListButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof CampaignListButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopPage: Story = {
	args: {
		label: "お得なキャンペーン開催中♪ 一覧を見る",
		url: "/",
	},
};

export const TestPage: Story = {
	args: {
		label: "テスト",
		url: "/",
	},
};
