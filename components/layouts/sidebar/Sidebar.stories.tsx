import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockSide } from './Sidebar.mocks';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';

export default {
  title: 'Layouts/SidebarLayout',
  component: SidebarLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSide.base,
} as ISidebarLayout;
