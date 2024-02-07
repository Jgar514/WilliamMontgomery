import React from "react";
import { Html, Text } from "@react-three/drei";

const BuyTicketsButton = ({ position }) => {
  return (
    <Html zIndexRange={[100, 0]} position={position}>
      <div style={{ color: "white" }}>
        <Text fontSize={0.15}>Buy Tickets</Text>
      </div>
    </Html>
  );
};

export default BuyTicketsButton;