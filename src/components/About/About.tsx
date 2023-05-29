import "./About.css";

export default function About(prop: any) {
  const { register, errors } = prop;

  return (
    <div className="about">
      <div className="labelAbout">
        <div>About:</div>
      </div>

      <div className="inputs">
        <div className="aboutFlex">
          <label htmlFor="firstName">first name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Ivo"
            {...register("firstName", {
              required: true,
              maxLength: 10,
              pattern: /^[a-zA-Z]+$/,
            })}
          />
          {errors.firstName && (
            <div className="error">Enter first name without numbers</div>
          )}
        </div>
        <div className="aboutFlex">
          <label htmlFor="lastName">last name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Ivić"
            {...register("lastName", {
              required: true,
              maxLength: 20,
              pattern: /^[a-zA-Z]+$/,
            })}
          />
          {errors.lastName && (
            <div className="error">
              Enter last name without numbers and č,ć..etc.
            </div>
          )}
        </div>

        <div className="aboutFlex">
          <label htmlFor="country">country </label>
          <select {...register("Country", { required: true })} id="country">
            <option value="Hrvatska">Hrvatska</option>
            <option value=" Srbija"> Srbija</option>
            <option value=" Bosna i Hercegovina"> Bosna i Hercegovina</option>
            <option value=" Crna Gora"> Crna Gora</option>
          </select>
        </div>
        <div className="aboutFlex">
          <label htmlFor="address">address </label>
          <input
            id="address"
            type="text"
            placeholder="Poljaci 21"
            {...register("Address", { required: true })}
          />
          {errors.Address && <div className="error">Enter address!</div>}
        </div>
      </div>
    </div>
  );
}
