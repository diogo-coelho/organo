
import './FormGroup.css'
import InputField from '../InputField/InputField'
import Combobox from '../Combobox/Combobox'

const teams = [
	'Programação',
	'Fronte-end',
	'Data Science',
	'Devops',
	'UX e Design',
	'Mobile',
	'Inovação e Gestão'
]

const FormGroup = () => {
	return (
		<section className="formulario">
			<form>
				<h2>Preencha os dados para criar o card do colaborador</h2>

				<InputField label="Nome" placeholder="Digite seu nome" />
				<InputField label="Cargo" placeholder="Digite seu cargo" />
				<InputField label="Imagem" placeholder="Informe o endereço da imagem" />
				<Combobox label="Time" itens={teams} />
			</form>
		</section>
	)
}

export default FormGroup