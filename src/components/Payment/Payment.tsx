import React from "react";
import "./Payment.css";

export default function Payment(prop: any) {
  const { register, errors } = prop;

  return (
    <div className="pay">
      <div className="titlePay">
        <label htmlFor="payment">Paymenth method: </label>
      </div>
      <div className="choice">
        <div>
          <input
            {...register("choice", { required: true })}
            id="payment"
            type="radio"
            value="Cash"
          />
          Cash
        </div>

        <div>
          <input
            {...register("choice", { required: true })}
            id="payment"
            type="radio"
            value=" Card"
          />
          Card
        </div>
      </div>
      {errors.choice && <div className="error">Choose paymenth method!</div>}
    </div>
  );
}
