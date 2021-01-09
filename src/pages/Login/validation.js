const rules = {
  email: {
    required: { value: true, message: "Email harus diisi" },
    maxLength: { value: 250, message: "Panjang Maxsimal 250 Karakter" },
    pattern: {
      value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,
      message: "Email tidak valid",
    },
  },
  password: {
    required: { value: true, message: "Password lengkap harus diisi" },
    maxLength: { value: 250, message: "Panjang Maxsimal 250 Karakter" },
  },
};
export { rules };
