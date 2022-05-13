import { Button } from 'react-bootstrap';
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { useState } from 'react';

const PayButton = ({ isOpened, title, onSubmit, onClose }) => {

  const [state, setState] = useState({
    errorMessage: ""
  });
  const handleSubmit = () => {
    const campaign = Campaign();
    setState((prevState) => ({
        ...prevState,
        errorMessage: "",
    }));
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        errorMessage: err.message,
      }));
    }
  };

  return (
    
    <Button variant="primary" onClick={handleSubmit}>
          Pay
    </Button>
  );
};

export default PayButton;
