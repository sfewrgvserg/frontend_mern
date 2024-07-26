import axios from "axios";

const data = async () => {
  const data = await axios.get("http://localhost:3000/subTottal");
};

export default data;
