import CustomButton from "./components/customButton";
import CustomText from "./components/customText";
import { Counter } from "./components/Counter";
import { Users } from "./components/Users";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <CustomText textColor='red' textType='title'>Contador</CustomText>
      <CustomButton buttonColor='red' buttonText='Guardar datos'/>
      <Counter defaultCount={2}></Counter>
      <Users />
      <Form />
    </div>
  );
}

export default App;
