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

import { rules } from "./validation";
import { registerUser } from "../../api/auth";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
export default function Register() {
  let { register, handleSubmit, errors, setError } = useForm();
  // (2) state status dengan nilai default `statuslist.idle`
  let [status, setStatus] = React.useState(statuslist.idle);
  const onSubmit = async (formData) => {
    // let coba = JSON.stringify(formData);
    // console.log("data form", coba);
    let { password, password_confirmation } = formData;
    if (password !== password_confirmation) {
      return setError("password_confirmation", {
        type: "equality",
        message: "Konfirmasi password tidak valid",
      });
    }
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
    }
    setStatus(statuslist.success);
  };

  return (
    <LayoutOne size="small">
      <Card color="white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl errorMessage={errors.full_name?.message}>
            <InputText
              name="full_name"
              placeholder="Nama Lengkap"
              fitContainer
              ref={register(rules.full_name)}
            />
          </FormControl>
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
          <FormControl errorMessage={errors.password_confirmation?.message}>
            <InputPassword
              name="password_confirmation"
              placeholder="Konfirmasi Password"
              fitContainer
              ref={register(rules.password_confirmation)}
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
