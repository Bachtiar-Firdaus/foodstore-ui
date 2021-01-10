import * as React from "react";
import { config } from "../../config";
import { arrayOf, string, shape, oneOfType, number, func } from "prop-types";
import { CardItem } from "upkit";

export default function Cart({ items }) {
  return (
    <div>
      {!items.length ? (
        <div className="text-center text-sm text-red-900">
          {" "}
          belum ada items di keranjang{" "}
        </div>
      ) : null}
      {items.map((item, index) => {
        return (
          <div key={index} className="mb-2">
            <CardItem
              imgUrl={`${config.api_host}/upload/${item.image_url}`}
              name={item.name}
              qty={item.qty}
              color="orange"
            />
          </div>
        );
      })}
    </div>
  );
}
Cart.propTypes = {
  items: arrayOf(
    shape({
      _id: string.isRequired,
      name: string.isRequired,
      qty: oneOfType([string, number]).isRequired,
    })
  ),
};
