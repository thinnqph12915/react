import { useEffect, useState } from "react";
import Routes from "./Routes";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6153c7069935230017557055.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const HandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const onHandleUpdate = (product) => {
    console.log("app", product);
    const newProject = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProject);
  };
  return (
    <div className="App">
      <Routes
        products={products}
        onAdd={HandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
      />
    </div>
  );
}

export default App;
