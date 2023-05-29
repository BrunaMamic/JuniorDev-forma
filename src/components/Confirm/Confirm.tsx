import React from "react";
import { useForm } from "react-hook-form";
import "./Confirm.css";

export default function Confirm(prop: any) {
  const { register } = prop;

  return (
    <div className="check">
      <input
        type="checkbox"
        placeholder="confirm"
        {...register("confirm", { required: true })}
      />
      <div className="text">I agree to Terms&Conditions</div>
    </div>
  );
}
