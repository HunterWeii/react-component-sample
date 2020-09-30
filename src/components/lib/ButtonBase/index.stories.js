import React from 'react';
import { ButtonBase } from 'components';

export default {
  title: 'ButtonBase',
  component: ButtonBase
};

const Template = (args) => <ButtonBase {...args}>Click</ButtonBase>

export const Button = Template.bind({});
export const DangerButton = Template.bind({});
DangerButton.args = { danger: true };