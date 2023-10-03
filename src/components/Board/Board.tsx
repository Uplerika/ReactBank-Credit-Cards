import React from "react";
import { NavLink } from "react-router-dom";
import BoardItem from "../BoardItem/BoardItem";
import styles from "./Board.module.css";
import { compareAccounts } from "../../utils/accounts";

interface BoardProps {
  accounts: {
    id: string;
    customTitle?: string;
    type: "debit" | "credit" | "saving" | "loan" | "external";
    amount?: number;
    currency: "RUB" | "USD" | "EUR" | "GBP";
    title: string;
  }[];
}

const Board: React.FC<BoardProps> = ({ accounts }) => {
  if (!accounts) {
    return null;
  }

  const accountsSort = accounts.slice().sort(compareAccounts);

  return (
    <div className={styles.board}>
      {accountsSort.map((item) => (
        <NavLink
          key={item.id}
          className={styles.link}
          activeClassName={styles.activeItem}
          to={`/account/${item.id}`}
        >
          <BoardItem {...item} />
        </NavLink>
      ))}
      <NavLink
        className={styles.link}
        activeClassName={styles.activeItem}
        to="/actions/add_card"
      >
        <div className={styles.boardItem}>Привязать карту</div>
      </NavLink>
    </div>
  );
};

export default Board;
