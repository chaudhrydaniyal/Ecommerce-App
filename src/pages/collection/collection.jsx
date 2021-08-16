import React from 'react';
import CustomButton from '../../components/custom-button/custom-button'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';

import './collection.scss'




class Collection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collection:
                [


                    {
                        id: 1,
                        name: 'watch',

                        title: 'watches',
                        price: '35',
                        url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    },
                    {
                        id: 2,
                        name: 'watch',

                        title: 'watches',
                        price: '29',
                        url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    },
                    {id: 3,                        name: 'watch',
                        title: 'watches',
                        price: '25',
                        url: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 4,                        name: 'watch',
                        title: 'watches',
                        price: '33',
                        url: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 5,                        name: 'watch',
                        title: 'watches',
                        price: '30',
                        url: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    }
                    ,





                    {id: 6,                        name: 'hat',
                        title: 'hats',
                        price: '14',
                        url: 'https://images.unsplash.com/photo-1523480773376-9d46ea986a7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxoYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    },
                    {id: 7,                        name: 'hat',
                        title: 'hats',
                        price: '17',
                        url: 'https://images.unsplash.com/photo-1556189258-33a1334942ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA1fHxoYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    },
                    {id: 8,                        name: 'hat',
                        title: 'hats',
                        price: '14',
                        url: 'https://images.unsplash.com/photo-1609758771020-395334bb273d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM1fHxoYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 9,                        name: 'hat',
                        title: 'hats',
                        price: '20',
                        url: 'https://images.unsplash.com/photo-1548178414-5d8d2a48cc0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM5fHxoYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 10,                        name: 'hat',
                        title: 'hats',
                        price: '22',
                        url: 'https://images.unsplash.com/photo-1597736447670-40d6d5bbe43d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU5fHxoYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    },




                    {id: 11,                        name: 'ebook',
                        title: 'ebooks',
                        price: '9',
                        url: 'data:image/jpeg;base64,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'
                    },
                    {id: 12,                        name: 'ebook',
                        title: 'ebooks',
                        price: '7',
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXYDUVpCemt5I6VORTdbW3ooTRtjVmDLAvg&usqp=CAU'


                    },
                    {id: 13,                        name: 'ebook',
                        title: 'ebooks',
                        price: '8',
                        url: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg'



                    },
                    {id: 14,                        name: 'ebook',
                        title: 'ebooks',
                        price: '8',
                        url: 'https://www.ebookscoversdesign.com/uploads/2/6/4/7/26479531/deadlys.jpg'



                    },
                    {id: 15,                        name: 'ebook',
                        title: 'ebooks',
                        price: '9',
                        url: 'https://www.bookbaby.com/images/cover-basic/world-beyond.jpg'


                    }
                    ,






                    {id: 16,                        name: 'jacket',
                        title: 'jackets',
                        price: '24',
                        url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    },
                    {id: 17,                        name: 'jacket',
                        title: 'jackets',
                        price: '23',
                        url: 'https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    },
                    {id: 18,                        name: 'jacket',
                        title: 'jackets',
                        price: '26',
                        url: 'https://images.unsplash.com/photo-1557418669-db3f781a58c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 19,                        name: 'jacket',
                        title: 'jackets',
                        price: '18',
                        url: 'https://images.unsplash.com/photo-1620867268520-bb2fc18e3ff4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 20,                        name: 'jacket',
                        title: 'jackets',
                        price: '19',
                        url: 'https://images.unsplash.com/flagged/photo-1578507054195-f96dec3a8b14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    }





                    ,
                    {id: 21,                        name: 'glasses',
                        title: 'glasses',
                        price: '3',
                        url: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    },
                    {id: 22,                        name: 'glasses',
                        title: 'glasses',
                        price: '2',
                        url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    },
                    {id: 23,                        name: 'glasses',
                        title: 'glasses',
                        price: '3',
                        url: 'https://images.unsplash.com/photo-1556306510-31ca015374b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdsYXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 24,                        name: 'glasses',
                        title: 'glasses',
                        price: '4',
                        url: 'https://images.unsplash.com/photo-1546180245-c59500ad14d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdsYXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'



                    },
                    {id: 25,                        name: 'glasses',
                        title: 'glasses',
                        price: '3',
                        url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdsYXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'


                    }
                ]

        }
    }

    render() {

        const title = this.props.match.params.title;
        let a = this.state.collection.filter((obj) => { if (obj.title === title) { return obj } });


        return (
            <div className='collections' >

                {/*} {this.state.sections.map((section) => (<Itemcontainer title={section.title} url={section.url}></Itemcontainer>))};*/}

                {a.map((a) => (<div className='collection-item'><div className='collection-background-image' style={{ backgroundImage: `url(${a.url})` }} >
                    <CustomButton onClick={() => this.props.addItem(a)} addItem >  Add to cart     </CustomButton>
                </div>
               Price: ${a.price}

</div>
                ))};




            </div >
        )
    }
}



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(Collection);