import './MyButton.css'

const MyButton = (props) => {
	return (
		<button className='botao'>
			{props.children}
		</button>
	)
}

export default MyButton