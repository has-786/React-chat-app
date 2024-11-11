import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import url from "../url";
import Loading from "../components/loading";

export default function Authenticatedprofile(Profile, Authredirect) {
  return function Authenticate(props) {
    const [auth, setAuth] = useState(0);
    const [redirect, setRedirect] = useState("signin");

    const dispatch = useDispatch();
    const exist = useSelector((state) => state.groupReducer.exist);
    const [email, name] = props.match.params.profile.split("-");
    useEffect(() => {
      const token = localStorage.getItem("token");
      const secureAxios = axios.create({
        baseURL: url,
        headers: {
          Authorization: `bearer ${token}`
        }
      });

      secureAxios
        .post("getProfile", { email })
        .then((response) => {
          const body = response.data;
          //                alert(body.status)
          if (body.status == 1) {
            dispatch({
              type: "load_profile",
              payload: { name: body.name, email: body.email, path: body.path }
            });
            setAuth(1);
          } else {
            setAuth(2);
            setRedirect("");
          }
        })
        .catch((err) => {
          setAuth(2);
        });
    }, []);
    return auth == 0 ? (
      <Loading />
    ) : auth == 1 ? (
      <Profile {...props} />
    ) : (
      <Authredirect redirect={redirect} />
    );
  };
}
