import React, { useState } from "react";
import InputSearch from "./InputSearch";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add, removeAll } from "../store/ducks/compras";
import getListFood from "../services/getListFood";

const AddProduct = ({ add, removeAll }) => {
  const [product, setProdutct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = (product, quantity) => {
    add(product, quantity);
    setProdutct("");
    setQuantity(1);
  };

  return (
    <div>
      {/* <pre>
        {JSON.stringify({
          product,
          quantity,
        })}
      </pre> */}
      <div className="form-row">
        <InputSearch
          search={product}
          setSearch={setProdutct}
          loadOptions={getListFood}
        />
        <div className="col">
          <input
            type="number"
            min="1"
            className="form-control"
            placeholder="Quantidade"
            onChange={(event) => setQuantity(event.target.value)}
            value={quantity}
          />
        </div>
        <div className="col">
          <button
            onClick={() => handleAddProduct(product, quantity)}
            className="btn btn-primary"
          >
            Incluir
          </button>
          <button onClick={() => removeAll()} className="btn btn-danger">
            Limpar Lista
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, removeAll }, dispatch);

export default connect(null, mapDispatchToProps)(AddProduct);
