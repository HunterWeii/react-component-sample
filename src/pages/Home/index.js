import React, { useState } from 'react'
import { ButtonBase, TabsButton } from "components";
import "./index.scss"

export default function Home() {
  const tabItems = [
    { key: 'ab123', tabName: 'Item 1' },
    { key: 'ag123', tabName: 'Item 2' },
    { key: 'aqq123', tabName: 'Item 3' },
  ];
  const [ selectedTab, setSelectedTab ] = useState(tabItems[0].key);
  const onChangeTab = key => () => setSelectedTab(key);

  return (
    <div className="home">
      <TabsButton
        tabItems={ tabItems } 
        selectedTab={ selectedTab }
        onChangeTab={ onChangeTab }
      />
    </div>
  )
}
