import './Combobox.css'

const Combobox = (props) => {
	return (
		<div className="lista-suspensa">
			<label>{ props.label }</label>
			<select>
				{props.itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default Combobox