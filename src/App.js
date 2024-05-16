import Banner from './components/Banner/Banner';
import InputField from './components/InputField/InputField';

function App() {
  return (
    <div className="App">
      <Banner />
	  <InputField label="Nome" placeholder="Digite seu nome" />
	  <InputField label="Cargo" placeholder="Digite seu cargo" />
	  <InputField label="Imagem" placeholder="Informe o endereço da imagem" />
    </div>
  );
}

export default App;
