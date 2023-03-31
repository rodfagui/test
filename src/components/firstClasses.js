import CustomButton from "./customButton";
import CustomText from "./customText";
import { Counter } from "./Counter";
import Counter2 from "./counter2";
import { Users } from "./UsersTest";
import Form from "./Form";

function FirstClasses() {
  return (
    <>
      <CustomText textColor='red' textType='title'>Contador</CustomText>
      <CustomButton buttonColor='red' buttonText='Guardar datos'/>
      <Counter defaultCount={2}></Counter>
      <Counter2 defaultCount={5}/>
      <Users />
      <Form />
    </>
  );
}

export default FirstClasses;