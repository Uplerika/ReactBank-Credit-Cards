import React from "react";
import { getCurrencyChar } from "../../utils/currencies";

interface IMoneyProps {
  value?: number;
  currency: "RUB" | "USD" | "EUR" | "GBP";
}

const Money: React.FC<IMoneyProps> = ({ value, currency }) => {
  const whole = value && Math.trunc(value);
  const fraction = value?.toString().split(".")[1];

  return (
    <>
      <span>{whole}</span>
      {fraction && <span>,{fraction}</span>}
      {currency && <span>{getCurrencyChar(currency)}</span>}
    </>
  );
};
export default Money;
