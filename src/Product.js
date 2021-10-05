import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
export default function Product(props) {
  ////helllloooooo
  const removeProduct = async (id) => {
    try {
      await fetch("https://6153c7069935230017557055.mockapi.io/users/" + id, {
        method: "DELETE",
      });
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}
                >
                  Xóa
                </button>
              </td>
              <td>
                <div className="btn-group">
                  <Link
                    role="button"
                    className="btn btn-danger"
                    to={"/product/edit/" + product.id}
                  >
                    Chỉnh sửa
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
