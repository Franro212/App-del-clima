import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";


function UseClima() {
  return useContext (ClimaContext)
}
export default UseClima