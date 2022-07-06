import React from "react";
import Link from "next/link";
import Router from "next/router";
export default function index() {
  return (
    <>
      <nav className="flex items-center justify-center py-8">
        <ul className="flex items-center justify-center gap-x-4">
          <li
            onClick={() => Router.push("/")}
            className="cursor-pointer font-bold"
          >
            Page 1
          </li>

          <li
            onClick={() => Router.push("/about")}
            className="cursor-pointer font-bold"
          >
            Page 2
          </li>
          <li
            onClick={() => Router.push("/form2")}
            className="cursor-pointer font-bold"
          >
            Page 3
          </li>
          <li
            onClick={() => Router.push("/api1")}
            className="cursor-pointer font-bold"
          >
            Page 4
          </li>
          <li
            onClick={() => Router.push("/contact")}
            className="cursor-pointer font-bold"
          >
            Page 5
          </li>
        </ul>
      </nav>
    </>
  );
}
