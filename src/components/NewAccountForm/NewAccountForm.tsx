import React from "react";
import MaskedInput from "react-maskedinput";
import Button from "../Button/Button";
import styles from "./NewAccountForm.module.css";
import cn from "classnames";
import {
  cardExpired,
  fieldIsEmpty,
  monthIsValid,
} from "../../utils/validators";

type NewAccountFormState = {
  cardNumber: string;
  month: string;
  year: string;
};

type NewAccountFormProps = {
  handleSubmit: (newAccount: {
    id: number;
    title: string;
    type: string;
  }) => void;
};

export default class NewAccountForm extends React.Component<
  NewAccountFormProps,
  NewAccountFormState
> {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: "",
      month: "",
      year: "",
    };
  }

  isValid = () => {
    if (
      this.state.cardNumber.replace(/[_-]/g, "").length === 19 &&
      this.state.year.replace(/[_-]/g, "").length === 2 &&
      !fieldIsEmpty(this.state.cardNumber) &&
      monthIsValid(this.state.month) &&
      !cardExpired(this.state.month, this.state.year)
    )
      return true;
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      cardNumber: "",
      month: "",
      year: "",
    });
    const newAccount = {
      id: Date.now(),
      type: "external",
      title: `Привязанная карта *${this.state.cardNumber.slice(-4)}`,
    };
    this.isValid() && this.props.handleSubmit(newAccount);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    } as {
      [K in keyof NewAccountFormState]: NewAccountFormState[K];
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Привязка банковской карты</h2>
        <div className={styles.cardForm}>
          <MaskedInput
            required
            mask="1111 1111 1111 1111"
            name="cardNumber"
            value={this.state.cardNumber}
            onChange={this.handleInputChange}
            placeholder="Номер карты"
            className={styles.input}
          />
          <span className={styles.label}>VALID THRU</span>
          <div className={styles.validThruFieldset}>
            <MaskedInput
              mask="11"
              name="month"
              value={this.state.month}
              placeholder="MM"
              //pattern="^(0?[1-9]|1[012])$"
              required
              className={cn(styles.input, styles.inputDate)}
              onChange={this.handleInputChange}
            />

            <MaskedInput
              mask="11"
              name="year"
              value={this.state.year}
              placeholder="YY"
              required
              className={cn(styles.input, styles.inputDate)}
              onChange={this.handleInputChange}
            />
          </div>
          <Button disabled={!this.isValid()} type="submit">
            Привязать
          </Button>
        </div>
      </form>
    );
  }
}
