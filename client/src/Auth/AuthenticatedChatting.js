import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import url from "../url";
import Loading from "../components/loading";

export default function Authenticatedchatting(Chatting, Authredirect) {
  return function Authenticate(props) {
    const [auth, setAuth] = useState(0);
    const [redirect, setRedirect] = useState("signin");
    const room = props.match.params.room;
    const exist = useSelector((state) => state.groupReducer.exist);
    const latest = useSelector((state) => state.groupReducer.latest);

    useEffect(() => {
      if (exist) {
        if (!latest.includes(room)) {
          setRedirect("enterroom");
          setAuth(2);
        } else setAuth(1);
      } else {
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
            if (!body.latest.includes(room)) {
              setRedirect("enterroom");
              setAuth(2);
            } else setAuth(1);
          })
          .catch((err) => {
            setAuth(2);
          });
      }
    }, []);

    return auth == 0 ? (
      <Loading />
    ) : auth == 1 ? (
      <Chatting roomName={room} {...props} />
    ) : (
      <Authredirect redirect={redirect} />
    );
  };
}
