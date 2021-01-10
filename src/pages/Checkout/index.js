import * as React from "react";
import { LayoutOne, Text } from "upkit";
import TopBar from "../../components/TopBar";

export default function Checkout() {
  return (
    <LayoutOne>
      <TopBar />
      <Text as="h3"> Checkout </Text>
    </LayoutOne>
  );
}
