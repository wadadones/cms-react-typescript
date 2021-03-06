import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router";
import { useMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            history.push("/home")
            showMessage({ title: "Success!", status: "success" })
          } else {
            showMessage({ title: "Cannot find user.", status: "error" })
          }
        })
        .catch(() => { showMessage({ title: "Cannot login.", status: "error" }) })
        .finally(() => { setLoading(false) })
    },
    [],
  )
  return { login, loading };
}
