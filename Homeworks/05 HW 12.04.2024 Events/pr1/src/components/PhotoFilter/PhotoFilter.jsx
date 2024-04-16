import React, { useState, useRef } from 'react'
import styles from './PhotoFilter.module.css'

const PhotoUploader = () => {
	const [selectedFile, setSelectedFile] = useState(null)
	const [imageURL, setImageURL] = useState(null)
	const [dragging, setDragging] = useState(false)
	const [brightness, setBrightness] = useState(100)
	const [contrast, setContrast] = useState(100)
	const [saturation, setSaturation] = useState(100)
	const [hue, setHue] = useState(0)
	const [blur, setBlur] = useState(0)
	const fileInputRef = useRef(null)

	const handleDragOver = event => {
		event.preventDefault()
		setDragging(true)
	}

	const handleDragEnter = event => {
		event.preventDefault()
		setDragging(true)
	}

	const handleDragLeave = () => {
		setDragging(false)
	}

	const handleDrop = event => {
		event.preventDefault()
		setDragging(false)
		const file = event.dataTransfer.files[0]
		setSelectedFile(file)
		if (file) {
			const fileURL = URL.createObjectURL(file)
			setImageURL(fileURL)
		}
	}

	const handleFileChange = event => {
		const file = event.target.files[0]
		setSelectedFile(file)
		if (file) {
			const fileURL = URL.createObjectURL(file)
			setImageURL(fileURL)
		}
	}

	const handleClick = () => {
		fileInputRef.current.click()
	}

	const handleBrightnessChange = event => {
		setBrightness(event.target.value)
	}

	const handleContrastChange = event => {
		setContrast(event.target.value)
	}

	const handleSaturationChange = event => {
		setSaturation(event.target.value)
	}

	const handleHueChange = event => {
		setHue(event.target.value)
	}

	const handleBlurChange = event => {
		setBlur(event.target.value)
	}

	const handleTagClick = tag => {
		// Применяем соответствующий фильтр в зависимости от выбранного тега
		switch (tag) {
			case 'none':
				setBrightness(100)
				setContrast(100)
				setSaturation(100)
				setHue(0)
				setBlur(0)
				break
			case 'teal-white':
				setBrightness(110)
				setContrast(90)
				setSaturation(120)
				setHue(180)
				setBlur(0)
				break
			case 'teal-lightgreen':
				setBrightness(100)
				setContrast(120)
				setSaturation(140)
				setHue(90)
				setBlur(0)
				break
			case 'sepia':
				setBrightness(100)
				setContrast(90)
				setSaturation(120)
				setHue(30)
				setBlur(0)
				break
			case 'purple-sepia':
				setBrightness(100)
				setContrast(90)
				setSaturation(150)
				setHue(270)
				setBlur(0)
				break
			case 'cherry-icecream':
				setBrightness(100)
				setContrast(110)
				setSaturation(90)
				setHue(0)
				setBlur(0)
				break
			default:
				break
		}
	}

	const handleSave = () => {
		if (imageURL) {
			const canvas = document.createElement('canvas')
			const ctx = canvas.getContext('2d')
			const img = new Image()

			// Устанавливаем размеры canvas такие же, как у изображения
			img.onload = () => {
				canvas.width = img.width
				canvas.height = img.height

				// Применяем фильтры
				ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg) blur(${blur}px)`
				ctx.drawImage(img, 0, 0)

				// Преобразуем изображение на canvas в Data URL
				const dataURL = canvas.toDataURL('image/jpeg')

				// Создаем ссылку для скачивания
				const link = document.createElement('a')
				link.href = dataURL
				link.download = 'my_image.jpg' // Имя файла для скачивания

				// Программно кликаем по ссылке для скачивания файла
				document.body.appendChild(link)
				link.click()

				// Удаляем ссылку из DOM
				document.body.removeChild(link)
			}

			// Загружаем изображение
			img.src = imageURL
		}
	}


	return (
		<div className={styles.mainContainer}>
			<div
				className={`${styles.container} ${styles.imageContainer} ${
					dragging ? styles.dragging : ''
				}`}
				onClick={handleClick}
				onDragOver={handleDragOver}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				{imageURL ? (
					<img
						src={imageURL}
						alt='Выбранная фотография'
						style={{
							maxWidth: '100%',
							filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg) blur(${blur}px)`,
						}}
					/>
				) : (
					<p>Перетащите изображение сюда или нажмите, чтобы выбрать</p>
				)}
				<input
					type='file'
					ref={fileInputRef}
					onChange={handleFileChange}
					accept='image/*'
					style={{ display: 'none' }}
				/>
			</div>

			<div className={styles.controls}>
				<label htmlFor='brightness'>Яркость:</label>
				<input
					type='range'
					id='brightness'
					min='0'
					max='200'
					value={brightness}
					onChange={handleBrightnessChange}
				/>
				<label htmlFor='contrast'>Контраст:</label>
				<input
					type='range'
					id='contrast'
					min='0'
					max='200'
					value={contrast}
					onChange={handleContrastChange}
				/>
				<label htmlFor='saturation'>Насыщенность:</label>
				<input
					type='range'
					id='saturation'
					min='0'
					max='200'
					value={saturation}
					onChange={handleSaturationChange}
				/>
				<label htmlFor='hue'>Тональность:</label>
				<input
					type='range'
					id='hue'
					min='0'
					max='360'
					value={hue}
					onChange={handleHueChange}
				/>
				<label htmlFor='blur'>Размытие:</label>
				<input
					type='range'
					id='blur'
					min='0'
					max='20'
					value={blur}
					onChange={handleBlurChange}
				/>
				<div className={styles.tags}>
					<button onClick={() => handleTagClick('none')}>None</button>
					<button onClick={() => handleTagClick('teal-white')}>
						Teal White
					</button>
					<button onClick={() => handleTagClick('teal-lightgreen')}>
						Teal Lightgreen
					</button>
					<button onClick={() => handleTagClick('sepia')}>Sepia</button>
					<button onClick={() => handleTagClick('purple-sepia')}>
						Purple Sepia
					</button>
					<button onClick={() => handleTagClick('cherry-icecream')}>
						Cherry Icecream
					</button>
				</div>
				<button onClick={handleSave}>Сохранить</button>
			</div>
		</div>
	)
}

export default PhotoUploader
