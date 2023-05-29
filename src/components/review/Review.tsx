import Header from "../header/Header";
import "./Review.css";

function Review(prop: any) {
  const { formData } = prop;

  return (
    <div className="newDisplay">
      <Header title={"Data review"} />
      <div className="content">
        <div className="titles">Email:</div>
        <div className="data"> {formData.email}</div>
      </div>

      <div className="content">
        <div className="titles">Name:</div>
        <div className="data">
          {formData.firstName} {formData.lastName}
        </div>
      </div>

      <div className="content">
        <div className="titles">Country:</div>
        <div className="data">{formData.Country}</div>
      </div>

      <div className="content">
        <div className="titles">Address:</div>
        <div className="data">{formData.Address}</div>
      </div>

      <div className="content">
        <div className="titles">Paymenth method:</div>
        <div className="data">{formData.choice}</div>
      </div>
    </div>
  );
}

export default Review;
