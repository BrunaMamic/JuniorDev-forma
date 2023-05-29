import "./Kontakt.css";

const Kontakt = (prop: any) => {
  const { register, errors } = prop;

  return (
    <div>
      <div className="email">
        <div className="labelEmail">Contact:</div>

        <div className="inputEmail">
          <label htmlFor="email">e-mail address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@example.com"
            {...register("email", {
              required: true,
              maxLength: 80,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          {errors.email && <div className="error">Email is invalid!</div>}
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
