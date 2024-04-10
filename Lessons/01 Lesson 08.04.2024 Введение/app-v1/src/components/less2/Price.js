import React from 'react'
import RfcDesign from './RfcDesign'
import RccProgramming from './RccProgramming'

function Price() {
  return (
		<>
			<h2>Услуги</h2>
			<RfcDesign title='Card' price='300' />
			<RccProgramming title='Car' price='500' />
		</>
	)
}

export default Price
