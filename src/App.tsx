import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Kontakt from "./components/kontakt/Kontakt";
import Payment from "./components/Payment/Payment";
import Confirm from "./components/Confirm/Confirm";
import Button from "./components/Button/Button";
import Review from "./components/review/Review";
import Header from "./components/header/Header";
import { useForm } from "react-hook-form";

function App() {
  const [formData, setFormData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setFormData(data);
  };

  useEffect(() => {
    if (errors.confirm) {
      alert("Please accept terms&conditions");
    }
  }, [errors.confirm]);

  console.log(formData);

  return (
    <div className="glavni">
      <div className="main">
        <Header title="Check out"/>
        <hr/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Kontakt register={register} errors={errors}/>
          <hr/>
          <About register={register} errors={errors}/>
          <hr/>
          <Payment register={register} errors={errors}/>
          <hr/>
          <Confirm register={register}/>
          <hr/>
          <Button/>
        </form>
      </div>

      <div className="reviewData">
        {formData && <Review formData={formData}/>}
      </div>
    </div>
  );
}

export default App;
