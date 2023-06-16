//experimental file for post req handling
const axios = require("axios");

const data = {
  name: "John",
  age: 30,
};

axios
  .post("http://localhost:3000/data", data)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
