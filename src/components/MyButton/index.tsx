import React, { ReactElement } from 'react'
import './MyButton.css'

interface MyButtonProps {
	children: ReactElement
}

const MyButton = ({ children }: MyButtonProps) => {
	return (
		<button className='botao'>
			{children}
		</button>
	)
}

export default MyButton