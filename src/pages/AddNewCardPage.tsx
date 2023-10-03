import NewAccountForm from "../components/NewAccountForm/NewAccountForm";
import React from "react";
interface AddNewCardPageProps {
  handleSubmit: (newAccount: {
    id: number;
    title: string;
    type: string;
  }) => void;
}
const AddNewCardPage: React.FC<AddNewCardPageProps> = ({ handleSubmit }) => {
  return <NewAccountForm handleSubmit={handleSubmit} />;
};

export default AddNewCardPage;
