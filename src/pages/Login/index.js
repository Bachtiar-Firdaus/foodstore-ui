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
import { useHistory } from "react-router-dom";

import { rules } from "./validation";
import { registerUser } from "../../api/auth";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
export default function Login() {
  let { register, handleSubmit, errors, setError } = useForm();
  // (2) state status dengan nilai default `statuslist.idle`
  let [status, setStatus] = React.useState(statuslist.idle);
  let history = useHistory();
  const onSubmit = async (formData) => {
    // let coba = JSON.stringify(formData);
    // console.log("data form", coba);

    setStatus(statuslist.process);
    let { data } = await registerUser(formData);
    if (data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach((field) => {
        setError(field, {
          type: "server",
          message: data.fields[field]?.properties?.message,
        });
      });
      setStatus(statuslist.error);
      return;
    }
    setStatus(statuslist.success);
    history.push("/");
  };

  return (
    <LayoutOne size="small">
      <Card color="white">
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
          <Button
            size="large"
            fitContainer
            disabled={status === statuslist.process}
          >
            {status === statuslist.process ? "sedang memproses" : "Mendaftar"}
          </Button>
        </form>
      </Card>
    </LayoutOne>
  );
}
