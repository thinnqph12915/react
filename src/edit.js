import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Edit(props) {
  let history = useHistory();
  let { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://6153c7069935230017557055.mockapi.io/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [reset]);
  const onSubmit = (data) => {
    fetch("https://6153c7069935230017557055.mockapi.io/users/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onUpdate(data);
        history.push("/product");
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          {...register("name")}
          defaultValue={product.name}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info">
        Update
      </button>
    </form>
  );
}
