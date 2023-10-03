import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Board from "./components/Board/Board";
import TimelinePage from "./pages/TimelinePage";
import AddNewCardPage from "./pages/AddNewCardPage";
import NotFoundPage from "./pages/NotFoundPage";

import styles from "./App.module.css";

import { loadAccounts, addAccount } from "./redux/accounts/actions";

interface AppProps {
  addAccount: (newAccount) => void;
  accounts: {
    id: string;
    customTitle?: string;
    type: "debit" | "credit" | "saving" | "loan" | "external";
    amount?: number;
    currency: "RUB" | "USD" | "EUR" | "GBP";
    title: string;
  }[];
  loadAccounts: () => void;
}

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.loadAccounts();
  }

  handleSubmit = (newAccount) => this.props.addAccount(newAccount);

  renderTimelinePage = (routeProps) => (
    <TimelinePage {...routeProps} accounts={this.props.accounts} />
  );

  renderAddNewCardPage = (routeProps) => (
    <AddNewCardPage {...routeProps} handleSubmit={this.handleSubmit} />
  );

  render() {
    return (
      <Router>
        <Board accounts={this.props.accounts} />
        <div className={styles.pageContent}>
          <Switch>
            <Route
              path="/actions/add_card"
              render={this.renderAddNewCardPage}
            />
            <Route
              path="/account/:accountId"
              render={this.renderTimelinePage}
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ accounts: state.accounts });
const mapDispatchToProps = (dispatch) => ({
  loadAccounts: () => dispatch(loadAccounts()),
  addAccount: (payload) => dispatch(addAccount(payload)),
});

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
