import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import url from "../url";
import Loading from "../components/loading";

export default function Authenticatednewroom(Newroom, Authredirect) {
  return function Authenticate(props) {
    const [auth, setAuth] = useState(0);
    const exist = useSelector((state) => state.groupReducer.exist);

    useEffect(() => {
      if (exist) setAuth(1);
      else {
        const token = localStorage.getItem("token");
        const secureAxios = axios.create({
          baseURL: url,
          headers: {
            Authorization: `bearer ${token}`
          }
        });

        secureAxios
          .get("getRooms")
          .then((response) => {
            const body = response.data;
            setAuth(1);
          })
          .catch((err) => {
            setAuth(2);
          });
      }
    }, []);
    return auth == 0 ? (
      <Loading />
    ) : auth == 1 ? (
      <Newroom {...props} />
    ) : (
      <Authredirect redirect="signin" />
    );
  };
}
