import web3 from "./web3";
import Campaign from "./build/Campaign.json";

const campaign = () => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), "0xb5031F6ad4b9e471baB3550095251BCd98278b9b");
};
export default campaign;
