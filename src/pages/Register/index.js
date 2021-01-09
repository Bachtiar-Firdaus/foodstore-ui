import * as React from "react";
import {
  LayoutOne,
  Card,
  FormControl,
  InputText,
  Button,
  InputPassword,
} from "upkit";

export default function Register() {
  return (
    <LayoutOne size="small">
      <Card color="white">
        <form>
          <FormControl>
            <InputText
              name="full_name"
              placeholder="Nama Lengkap"
              fitContainer
            />
          </FormControl>
          <FormControl>
            <InputText name="email" placeholder="EMAIL" fitContainer />
          </FormControl>
          <FormControl>
            <InputPassword
              name="password"
              placeholder="Password"
              fitContainer
            />
          </FormControl>
          <FormControl>
            <InputPassword
              name="password_confirmation"
              placeholder="Konfirmasi Password"
              fitContainer
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
