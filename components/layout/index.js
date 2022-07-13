import react from "react";
import Navbar from "../Navbar/index";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
