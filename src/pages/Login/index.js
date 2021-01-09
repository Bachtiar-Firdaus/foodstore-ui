import * as React from "react";
import {
  LayoutOne,
  Card,
  FormControl,
  InputText,
  Button,
  InputPassword,
} from "upkit";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import StoreLogo from "../../components/StoreLogo";
import { userLogin } from "../../features/Auth/actions";
import { rules } from "./validation";
import { login } from "../../api/auth";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
export default function Login() {
  let { register, handleSubmit, errors, setError } = useForm();
  let [status, setStatus] = React.useState(statuslist.idle);
  let dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = async ({ email, password }) => {
    setStatus(statuslist.process);

    let { data } = await login(email, password);

    if (data.error) {
      setError("password", {
        type: "invalidCredential",
        message: data.message,
      });
      setStatus(statuslist.error);
    } else {
      let { user, token } = data;
      dispatch(userLogin(user, token));
      history.push("/");
    }
    setStatus(statuslist.success);
  };

  return (
    <LayoutOne size="small">
      <br />
      <Card color="white">
        <div className="text-center mb-5">
          <StoreLogo />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl errorMessage={errors.email?.message}>
            <InputText
              name="email"
              placeholder="EMAIL"
              fitContainer
              ref={register(rules.email)}
            />
          </FormControl>
          <FormControl errorMessage={errors.password?.message}>
            <InputPassword
              name="password"
              placeholder="Password"
              fitContainer
              ref={register(rules.password)}
            />
          </FormControl>
          <Button size="large" fitContainer disabled={status === "process"}>
            Login
          </Button>
        </form>
        <div className="text-center mt-2">
          Belum punya akun?
          <Link to="/Register">
            <b> Daftar Sekarang. </b>
          </Link>
        </div>
      </Card>
    </LayoutOne>
  );
}
