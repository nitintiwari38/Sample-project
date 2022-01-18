import axios from "axios";
import { fetchBasicRequest  , fetchBasicSucess, fetcBasicFailuire} from "../redux/actions/detailsAction";

export const fetchBasicDetails =  () => {
  return function (dispatch) {
    //const parmas = `id=${id}`
  const endpoint =  `https://jsonplaceholder.typicode.com/users`
    dispatch(fetchBasicRequest)
    axios.get(endpoint)
    .then(response => {
      const data =  response.data[0];
      dispatch(fetchBasicSucess(data))
    })
    .catch(error => {
      dispatch(fetcBasicFailuire(error.message))
    })
  }
}