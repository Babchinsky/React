import React, { useState, useRef } from 'react'
import styles from './PhotoFilter.module.css'

const PhotoUploader = () => {
	const [state, setState] = useState({
		selectedFile: null,
		imageURL: null,
		dragging: false,
		brightness: 100,
		contrast: 100,
		saturation: 100,
		hue: 0,
		blur: 0,
	})
	const fileInputRef = useRef(null)

	const handleDragOver = event => {
		event.preventDefault()
		setState(prevState => ({ ...prevState, dragging: true }))
	}

	const handleDragEnter = event => {
		event.preventDefault()
		setState(prevState => ({ ...prevState, dragging: true }))
	}

	const handleDragLeave = () => {
		setState(prevState => ({ ...prevState, dragging: false }))
	}

	const handleDrop = event => {
		event.preventDefault()
		setState(prevState => ({ ...prevState, dragging: false }))
		const file = event.dataTransfer.files[0]
		handleFile(file)
	}

	const handleFileChange = event => {
		const file = event.target.files[0]
		handleFile(file)
	}

	const handleFile = file => {
		setState(prevState => ({
			...prevState,
			selectedFile: file,
			imageURL: file ? URL.createObjectURL(file) : null,
		}))
	}

	const handleClick = () => {
		fileInputRef.current.click()
	}

	const handleSliderChange = (key, value) => {
		setState(prevState => ({
			...prevState,
			[key]: value,
		}))
	}

	const handleTagClick = tag => {
		// Применяем соответствующий фильтр в зависимости от выбранного тега
		switch (tag) {
			case 'none':
				setState(prevState => ({
					...prevState,
					brightness: 100,
					contrast: 100,
					saturation: 100,
					hue: 0,
					blur: 0,
				}))
				break
			case 'teal-white':
				setState(prevState => ({
					...prevState,
					brightness: 110,
					contrast: 90,
					saturation: 120,
					hue: 180,
					blur: 0,
				}))
				break
			case 'teal-lightgreen':
				setState(prevState => ({
					...prevState,
					brightness: 100,
					contrast: 120,
					saturation: 140,
					hue: 90,
					blur: 0,
				}))
				break
			case 'sepia':
				setState(prevState => ({
					...prevState,
					brightness: 100,
					contrast: 90,
					saturation: 120,
					hue: 30,
					blur: 0,
				}))
				break
			case 'purple-sepia':
				setState(prevState => ({
					...prevState,
					brightness: 100,
					contrast: 90,
					saturation: 150,
					hue: 270,
					blur: 0,
				}))
				break
			case 'cherry-icecream':
				setState(prevState => ({
					...prevState,
					brightness: 100,
					contrast: 110,
					saturation: 90,
					hue: 0,
					blur: 0,
				}))
				break
			default:
				break
		}
	}

	const handleSave = () => {
		const { imageURL, brightness, contrast, saturation, hue, blur } = state
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
					state.dragging ? styles.dragging : ''
				}`}
				onClick={handleClick}
				onDragOver={handleDragOver}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				{state.imageURL ? (
					<img
						src={state.imageURL}
						alt='Выбранная фотография'
						style={{
							maxWidth: '100%',
							filter: `brightness(${state.brightness}%) contrast(${state.contrast}%) saturate(${state.saturation}%) hue-rotate(${state.hue}deg) blur(${state.blur}px)`,
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
					value={state.brightness}
					onChange={e => handleSliderChange('brightness', e.target.value)}
				/>
				<label htmlFor='contrast'>Контраст:</label>
				<input
					type='range'
					id='contrast'
					min='0'
					max='200'
					value={state.contrast}
					onChange={e => handleSliderChange('contrast', e.target.value)}
				/>
				<label htmlFor='saturation'>Насыщенность:</label>
				<input
					type='range'
					id='saturation'
					min='0'
					max='200'
					value={state.saturation}
					onChange={e => handleSliderChange('saturation', e.target.value)}
				/>
				<label htmlFor='hue'>Тональность:</label>
				<input
					type='range'
					id='hue'
					min='0'
					max='360'
					value={state.hue}
					onChange={e => handleSliderChange('hue', e.target.value)}
				/>
				<label htmlFor='blur'>Размытие:</label>
				<input
					type='range'
					id='blur'
					min='0'
					max='20'
					value={state.blur}
					onChange={e => handleSliderChange('blur', e.target.value)}
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
