import React, { useState } from 'react'
import styles from './TextEditor.module.css'

function TextEditor() {
	const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [isUppercase, setIsUppercase] = useState(false)
	const [myFontSize, setMyFontSize] = useState('14px')
	const [myFontFamily, setMyFontFamily] = useState('Arial')
	const [myFontColor, setMyFontColor] = useState('#000000') 

	const toggleBold = () => {
		setIsBold(!isBold)
	}

	const toggleItalic = () => {
		setIsItalic(!isItalic)
	}

	const toggleUnderline = () => {
		setIsUnderline(!isUnderline)
	}

	const toggleCase = () => {
		setIsUppercase(!isUppercase)
	}

	const onChangeMyFontSize = e => {
		setMyFontSize(e.target.value)
	}

	const onChangeMyFontFamily = e => {
		setMyFontFamily(e.target.value)
	}

  const onChangeMyFontColor = e => {
		setMyFontColor(e.target.value)
	}

  


	return (
		<>
			<div className={styles['buttons-row']}>
				<button className={isBold ? styles.active : ''} onClick={toggleBold}>
					B
				</button>

				<button
					className={isItalic ? styles.active : ''}
					onClick={toggleItalic}
				>
					I
				</button>
				<button
					className={isUnderline ? styles.active : ''}
					onClick={toggleUnderline}
				>
					U
				</button>
				<button
					className={isUppercase ? styles.active : ''}
					onClick={toggleCase}
				>
					Tt
				</button>

				<select
					name='myFontSize'
					value={myFontSize}
					onChange={onChangeMyFontSize}
				>
					<option value='12px'>12px</option>
					<option value='14px'>14px</option>
					<option value='16px'>16px</option>
					<option value='20px'>20px</option>
					<option value='22px'>22px</option>
				</select>

				<select
					name='myFontFamily'
					value={myFontFamily}
					onChange={onChangeMyFontFamily}
				>
					<option value='Arial'>Arial</option>
					<option value='Verdana'>Verdana</option>
					<option value='Helvetica'>Helvetica</option>
					<option value='Times New Roman'>Times New Roman</option>
					<option value='Georgia'>Georgia</option>
				</select>

				<input
					type='color'
					value={myFontColor}
					onChange={onChangeMyFontColor}
					className={styles.colorPicker}
				/>
			</div>

			<textarea
				className={styles.editor}
				style={{
					fontWeight: isBold ? 'bold' : 'normal',
					fontStyle: isItalic ? 'italic' : 'normal',
					textDecoration: isUnderline ? 'underline' : 'none',
					textTransform: isUppercase ? 'uppercase' : 'none',
					fontSize: myFontSize,
					fontFamily: myFontFamily,
					color: myFontColor,
				}}
			/>
		</>
	)
}

export default TextEditor
