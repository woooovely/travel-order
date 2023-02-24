import React, { useContext, useState } from "react";
import { OrderContext } from "../../context";

const SummaryPage = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [orderDetails] = useContext<any>(OrderContext);

  const productArray = Array.from(orderDetails.products);
  const productList = productArray.map(([key, value]: any) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = orderDetails.options.size > 0;
  let optionsDisplay = null;

  if (hasOptions) {
    const optionsArray = Array.from(orderDetails.options.keys());
    const optionList = optionsArray.map((key: any) => <li key={key}>{key}</li>);
    optionsDisplay = (
      <>
        <h2>옵션: {orderDetails.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품 : {orderDetails.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          checked={checked}
          id="confirm-checkbox"
          onChange={handleChange}
        />{" "}
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">주문 확인</button>
      </form>
    </div>
  );
};
