import type { Meta, StoryObj } from "@storybook/react";

import { MoreButton } from "./MoreButton";

const meta = {
	title: "Example/Hapitas/MoreButton",
	component: MoreButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof MoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopPage: Story = {
	args: {
		label: " チャレンジ一覧をもっとみる",
		url: "/",
	},
};

export const TestPage: Story = {
	args: {
		label: "テスト",
		url: "/",
	},
};
