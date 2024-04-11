import React from 'react'
import Product_list from './Product_list'

function Displaying_data() {
	const user = {
		name: 'Hedy Lamarr',
		imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
		imageSize: 90,
	}
  // let isValid = true;
  // let content;

  // if (isValid){
  //   content = <h2>Send data</h2>
  // }
  // else{
  //   content = <>
  //     <h2>Error</h2>
  //     <h2>Validate form</h2>
  //   </>
  // }



	return (
		<>
      <Product_list/>
			<h2>Displaying_data</h2>
      <img 
        src={user.imageUrl} 
        alt={"Photo " + user.name}
        style={{
          border: '1px solid red',
          borderRadius: '25px',
        }}/>
			<p>{user.name}</p>
      {/* {content} */}
      {/* <div>
        {
          isValid ? (
          <h2>Valid</h2>
        ):
        (
          <h2>Error</h2>
        )
        }
      </div> */}
      {/* {
        isValid && 
        <><h2>Valid</h2><p>lorem</p></>
      } */}
		</>
	)
}

export default Displaying_data
