import React from 'react';
import { Row } from 'react-bootstrap'
import LearnProduct from '../../components/product/learn-product';

function LearnMore(props) {
  const data = [
    {
      productId: '1122',
      note: 'THIS IS WHAT WE DO',
      url: 'https://c.zmags.com/assets/images/5bfc2df2dbec834554b5f1ed-optimized.jpeg',
    },      
    {
      productId: '1123',
      note: 'THIS IS WHO WE ARE',
      url: 'https://images.creator-prod.zmags.com/image/upload/w_0.8764044943820225,h_1.0,x_0.07640449438202247,y_0,c_crop,q_auto,f_auto/c_scale,w_536/5de57ffefaf7ea56194ba0ba.jpeg',
    },
    {
      productId: '1123',
      note: 'WE ARE MADE IN AMERICA',
      url: 'https://c.zmags.com/assets/images/5de580abfaf7ea56194ba1cb_720x450.jpeg',
    },
    {
      productId: '1123',
      note: 'WE ARE MADEFOR YOU',
      url: 'https://c.zmags.com/assets/images/5bacedbbfaf7ea301e0e477a_720x450.jpeg',
    },
  ]

  const renderContent = () => {
    let result = []
    let subResult = []
    
    data.forEach((el, index) => {
      if(index == 0) {
        subResult.push(<LearnProduct key={index} item={el} />)
      } else if( index % 2 == 1 || index == data.length - 1) {
        subResult.push(<LearnProduct key={index} item={el} />)
        result.push(<Row>{subResult}</Row>)
        subResult = []
      } else if(index % 2 == 0 ){
        subResult.push(<LearnProduct key={index} item={el} />)
      }
      
    });
  
    return result
  }

  return(
    <div className='learn-more-items'>
      {renderContent()}
    </div>
  )
}

export default LearnMore