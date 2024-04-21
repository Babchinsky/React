import React, { createContext, useContext } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
	const products = [
		{
			title: 'Рюкзак',
			price: 1500,
			id: 0,
			description: 'Легкий и прочный рюкзак для повседневного использования.',
		},
		{
			title: 'Клатч',
			price: 700,
			id: 1,
			description: 'Компактный клатч для хранения небольших вещей.',
		},
		{
			title: 'Чемодан',
			price: 3000,
			id: 2,
			description: 'Большой чемодан для длительных путешествий.',
		},
		{
			title: 'Кошелек',
			price: 400,
			id: 3,
			description: 'Классический кожаный кошелек.',
		},
		{
			title: 'Портфель',
			price: 2500,
			id: 4,
			description: 'Стильный портфель для деловых встреч.',
		},
		{
			title: 'Поясная сумка',
			price: 650,
			id: 5,
			description: 'Удобная поясная сумка для прогулок.',
		},
		{
			title: 'Спортивная сумка',
			price: 1200,
			id: 6,
			description: 'Сумка для спортивных принадлежностей.',
		},
		{
			title: 'Кейc',
			price: 2800,
			id: 7,
			description: 'Жесткий кейс для хранения документов и оборудования.',
		},
		{
			title: 'Сумка для ноутбука',
			price: 1700,
			id: 8,
			description: 'Сумка для переноски ноутбука и аксессуаров.',
		},
		{
			title: 'Косметичка',
			price: 500,
			id: 9,
			description: 'Компактная косметичка для путешествий.',
		},
		{
			title: 'Сумка для обуви',
			price: 900,
			id: 10,
			description: 'Сумка для хранения и транспортировки обуви.',
		},
		{
			title: 'Портмоне',
			price: 1000,
			id: 11,
			description: 'Стильное портмоне с множеством отделений.',
		},
		{
			title: 'Спортивный рюкзак',
			price: 1300,
			id: 12,
			description: 'Прочный рюкзак для занятий спортом.',
		},
		{
			title: 'Дорожная сумка',
			price: 2200,
			id: 13,
			description: 'Большая дорожная сумка для путешествий.',
		},
		{
			title: 'Сумка-холодильник',
			price: 1600,
			id: 14,
			description: 'Сумка-холодильник для сохранения свежести продуктов.',
		},
		{
			title: 'Сумка для фотоаппарата',
			price: 850,
			id: 15,
			description: 'Сумка для хранения и переноски фотоаппаратуры.',
		},
		{
			title: 'Сумка для рыбалки',
			price: 1100,
			id: 16,
			description: 'Удобная сумка для рыбацких принадлежностей.',
		},
	]


	return (
		<ProductContext.Provider value={products}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => {
	return useContext(ProductContext)
}
