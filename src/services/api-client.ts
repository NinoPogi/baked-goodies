import axios from "axios";

export default axios.create({
  baseURL: "https://baked-goodies-api.vercel.app/api",
  // baseURL: "/api",
});
