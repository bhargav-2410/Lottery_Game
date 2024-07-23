import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInput = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <>
      <h4>Comments Form</h4>

      <form>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          name="username"
          onChange={handleInput}
        />
        <br />
        <br />
        <textarea
          value={formData.remarks}
          onChange={handleInput}
          name="remarks"></textarea>
        <br />
        <br />
        <input
          onChange={handleInput}
          type="number"
          value={formData.rating}
          min={1}
          max={5}
          name="rating"
        />
        <br />
        <br />
        <button onSubmit={handleSubmit}>Add Comment</button>
      </form>
    </>
  );
}
