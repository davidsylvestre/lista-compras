import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { remove, increment, decrement, toggle } from "../store/ducks/compras";

const ListProduct = ({ cart, remove, increment, decrement, toggle }) => {
  return (
    <>
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Produto</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  {item.toggle ? (
                    <s>{item.product}</s>
                  ) : (
                    <span>{item.product}</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => decrement(item.id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    type="button"
                    className="btn btn-success btn-sm"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => toggle(item.id)}
                    type="button"
                    className={
                      "btn btn-sm " +
                      (item.toggle ? "btn-warning" : "btn-success")
                    }
                  >
                    {item.toggle ? "uncheck" : "check"}
                  </button>
                  <button
                    onClick={() => remove(item.id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.compras.cart,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ remove, increment, decrement, toggle }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
