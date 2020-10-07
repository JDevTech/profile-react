import axios from "axios"

const getAllProducts = () => {
  return axios.get("Compras.json");
}

export { getAllProducts }
