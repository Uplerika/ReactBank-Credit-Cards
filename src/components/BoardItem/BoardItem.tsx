import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import {
  removeExternalAccount,
  changeAccountTitle,
} from "../../redux/accounts/actions";

import styles from "./BoardItem.module.css";
import Money from "../Money/Money";

interface BoardItemProps {
  id: string;
  customTitle?: string;
  type: "debit" | "credit" | "saving" | "loan" | "external";
  amount?: number | undefined;
  currency: "RUB" | "USD" | "EUR" | "GBP";
  title: string;
  changeAccountTitle: (e) => void;
  removeExternalAccount: (e) => void;
}

type BoardItemState = {
  active: boolean;
  input: string;
};

class BoardItem extends React.Component<BoardItemProps, BoardItemState> {
  state: BoardItemState = {
    active: false,
    input: "",
  };

  editClick = () => {
    this.setState({
      active: true,
      input: this.props.customTitle || this.props.title,
    });
  };

  checkClick = (e) => {
    e.preventDefault();
    const { id } = this.props;
    this.setState({ active: false, input: "" });
    this.props.changeAccountTitle({ customTitle: this.state.input, id });
  };

  changeInput = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value } as {
      [K in keyof BoardItemState]: BoardItemState[K];
    });
  };

  removeExternal = () => {
    const { id } = this.props;
    this.props.removeExternalAccount({ id });
  };

  render() {
    const { type, customTitle, title, currency, amount } = this.props;

    return (
      <div className={styles.item}>
        <div className={cn(styles.logo, styles[`logo_${type}`])}></div>
        <div className={styles.title}>
          {this.state.active ? (
            <input
              type="text"
              value={this.state.input}
              name="input"
              onChange={this.changeInput}
            />
          ) : customTitle ? (
            customTitle
          ) : (
            title
          )}
          {!this.state.active ? (
            <button className={styles.editButton} onClick={this.editClick} />
          ) : (
            <button className={styles.checkButton} onClick={this.checkClick} />
          )}
          {type === "external" ? (
            <button
              className={styles.removeButton}
              onClick={this.removeExternal}
            />
          ) : null}
          {type !== "external" && (
            <div>
              <Money value={amount} currency={currency} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExternalAccount: ({ id }) => dispatch(removeExternalAccount({ id })),
  changeAccountTitle: ({ customTitle, id }) =>
    dispatch(changeAccountTitle({ customTitle, id })),
});

const mapStateToProps = (state) => ({ accounts: state.accounts });

export default connect(mapStateToProps, mapDispatchToProps)(BoardItem);
