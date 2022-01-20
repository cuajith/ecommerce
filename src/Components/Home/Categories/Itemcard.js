import React from "react"



const Itemcard = (props) => {
   
    return (
    
                <div className='gridbox'>
                    <div className='progrid'>
                        <h1>Mens Trending</h1>
                        <div className='progridcontainer'>
                            <img src={props.img} />
                            <img src={props.img} />
                            <img src={props.img} />
                            <h3>More</h3>
                        </div>
                    </div>
                </div>

    )
}
export default Itemcard

{/*<div className='gridbox'>
                <div className='progrid'>
                    <h1>Home Needs</h1>
                    <div className='progridcontainer'>
                        <img src={props.img} />
                        <img src={props.img} />
                        <img src={props.img}/>
                        <h3>More</h3>
                    </div>
                </div>
    </div>*/}
