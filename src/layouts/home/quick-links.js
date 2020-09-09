import React from 'react';
import { QUICK_LINKS } from './../../const/constant'
import QuickLinkItem from './quick-link-item'

function QuickLinks(props) {

  const renderQuickLinksItems = () => {
    let result = []
    QUICK_LINKS.forEach((el, index) => {
      result.push(
        <QuickLinkItem key={index} item={el} />
      )
    });
    return result;
  }

  return(
    <div>
      <div className='quick-links-title'>
        QUICK LINKS
      </div>
      <div>
        {renderQuickLinksItems()}
      </div>
    </div>
  )
}

export default QuickLinks