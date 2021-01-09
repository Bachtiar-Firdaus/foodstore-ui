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

export default function Register() {
  let { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = async (formData) => {
    let coba = JSON.stringify(formData);
    console.log("data form", coba);
  };

  return (
    <LayoutOne size="small">
      <Card color="white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <InputText
              name="full_name"
              placeholder="Nama Lengkap"
              fitContainer
              ref={register}
            />
          </FormControl>
          <FormControl>
            <InputText
              name="email"
              placeholder="EMAIL"
              fitContainer
              ref={register}
            />
          </FormControl>
          <FormControl>
            <InputPassword
              name="password"
              placeholder="Password"
              fitContainer
              ref={register}
            />
          </FormControl>
          <FormControl>
            <InputPassword
              name="password_confirmation"
              placeholder="Konfirmasi Password"
              fitContainer
              ref={register}
            />
          </FormControl>
          <Button size="large" fitContainer>
            Mendaftar
          </Button>
        </form>
      </Card>
    </LayoutOne>
  );
}
