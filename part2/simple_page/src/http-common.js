import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json"
    }
  });

//   may need to change later for docker