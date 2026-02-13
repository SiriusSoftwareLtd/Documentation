// biome-ignore lint/correctness/noUnusedImports: Required for Docusaurus to work properly

import Content from '@theme-original/AnnouncementBar/Content'
import React from 'react'

export default function ContentWrapper(props) {
  return (
    <div className="flex w-full items-center font-sfdisplay">
      <Content {...props} />
    </div>
  )
}
