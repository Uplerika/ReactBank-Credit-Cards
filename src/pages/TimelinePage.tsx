import React from "react";
import { connect } from "react-redux";
import Timeline from "../components/Timeline/Timeline";
import { loadOperations } from "../redux/operations/actions";
import { RouteComponentProps } from "react-router";

type PageProps = {
  loadOperations: (accountId: { id: number }) => void;
  operations: {
    id: number;
    title: string;
    date: number;
    amount: number;
    currency: "RUB" | "USD" | "EUR" | "GBP";
  }[];
};

class TimelinePage extends React.Component<RouteComponentProps, PageProps> {
  componentDidMount() {
    this.fetchOperations();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.accountId !== prevProps.match.params.accountId
    ) {
      this.fetchOperations();
    }
  }
  fetchOperations() {
    const accountId = this.props.match.params.accountId.toString();

    return this.props.loadOperations(accountId);
  }

  render() {
    if (!this.props.operations) {
      return <h2>Подождите, идет загрузка</h2>;
    }

    return this.props.operations.length > 0 ? (
      <div>
        <h2>Список операций</h2>
        <Timeline items={this.props.operations} />
      </div>
    ) : (
      <h2>По данному аккаунту нет операций</h2>
    );
  }
}

const mapStateToProps = (state) => ({
  operations: state.operations,
});

const mapDispatchToProps = (dispatch) => ({
  loadOperations: (accountId) => dispatch(loadOperations(accountId)),
});

export { TimelinePage };

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage);
