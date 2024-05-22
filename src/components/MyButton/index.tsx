import React, { ReactElement } from 'react'
import './MyButton.css'

interface MyButtonProps {
	children: ReactElement | string
}

const MyButton = (props: MyButtonProps) => {
	return (
		<button className='botao'>
			{props.children}
		</button>
	)
}

export default MyButton