import React from 'react';
import { TabsButton } from 'components';

export default {
  title: 'Tabs',
  component: TabsButton
};

const Template = args => <TabsButton {...args} />;

export const TabButton = Template.bind({});
TabButton.args = {
  tabItems: [
    { key: 'ab123', tabName: 'Item 1' },
    { key: 'ag123', tabName: 'Item 2' },
    { key: 'aqq123', tabName: 'Item 3' },
  ],
  selectedTab: 'ab123',
  onChangeTab: () => {}
};