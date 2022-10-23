import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardCat, { ICardCat } from './CatCard';
import { mockCardCatProps } from './CatCard.mocks';

export default {
  title: 'Cards/CardCat',
  component: CardCat,
  argTypes: {},
} as ComponentMeta<typeof CardCat>;

const Template: ComponentStory<typeof CardCat> = (args) => {
  return <CardCat {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockCardCatProps.base,
} as ICardCat;
