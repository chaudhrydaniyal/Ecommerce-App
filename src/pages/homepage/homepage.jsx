import React from 'react';
import { withRouter } from 'react-router';
import Itemcontainer from '../../components/item-container/item-container';
import './homepage.scss'



class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      sections: [
      {
        title: 'watches',
        url:'https://ae01.alicdn.com/kf/HTB1EH86f5CYBuNkHFCcq6AHtVXal.jpg'
      },
      {
        title: 'ebooks',
        url:'https://i.guim.co.uk/img/media/d6392b22ef8026d90b55dd0456f30803883569fc/0_356_5315_3189/master/5315.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3824f5d729eceb7faf25ac7e21d8d68f'


      },
      {
        title: 'hats',
        url:'https://cdn.thewirecutter.com/wp-content/uploads/2020/07/summerhats-lowres-11-630x420.jpg'



      },
      {
        title: 'jackets',
        url:'https://cdn.shopify.com/s/files/1/0752/6435/products/5_4899dbf3-45f0-4d8f-9553-ec238c780904.jpg?v=1607883046'



      },
      {
        title: 'glasses',
        url:'https://felixgray.com/blog/wp-content/uploads/2019/08/Untitled-Session5394-1-e1603397892155.jpeg'


      }
    ]
        
    }
  }
  render() {
    console.log(this.props.history);

    return (

      <div className="homepage">
     

        {this.state.sections.map ((section) => ( <Itemcontainer  title= {section.title} url={section.url}></Itemcontainer>) )}

        

      </div>
    )
  }
}



export default withRouter(Homepage);