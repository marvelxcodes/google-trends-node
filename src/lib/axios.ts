import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://trends.google.com",
});

export default axios;
