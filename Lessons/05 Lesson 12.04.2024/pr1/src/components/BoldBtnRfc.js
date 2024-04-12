import React, {useState} from 'react'

function BoldBtnRfc() {
  const [isBold, changeBold] = useState(false)


  return (
		<div>
			<p style={{ fontWeight: isBold ? 'bold' : 'normal' }}>
				Проверка
			</p>
			<button onClick={() => changeBold(!isBold)}>
				{isBold ? 'Сделать обычным' : 'Сделать жирным'}
			</button>
		</div>
	)
}

export default BoldBtnRfc
