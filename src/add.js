import { useForm } from "react-hook-form";
//helllo
export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://6153c7069935230017557055.mockapi.io/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Trường name không được bỏ trống</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" {...register("price")} />
        {errors.price && <span>Trường price không được bỏ trống</span>}
      </div>
      <button type="submit" className="btn btn-info">
        Thêm sản phẩm
      </button>
    </form>
  );
}
