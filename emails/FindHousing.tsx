import { Body, Head, Html, Img, Link, Text } from "@react-email/components";
import * as React from "react";
//import React from "react";

export const SkateAppEmail = () => (
  <Html>
    <Head>
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
      ></Link>
    </Head>
    <Body>
      <div
        //Reset password class
        style={{
          width: "736px",
          height: "38px",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
        }}
      >
        <h1
          style={{
            width: "134px",
            height: "24px",
            borderTop: "7px",
            borderLeft: "301px",
            transform: "rotate(0deg)",
            color: "#FFFFFF",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          Reset Your Password
        </h1>
      </div>

      <div
        //Red frame
        style={{
          width: "736px",
          height: "640px",
          top: "38px",
          //transform: "translate(-50%, -50%)",
          position: "flex",
          backgroundColor: "#FF5A60",
        }}
      ></div>
    </Body>
  </Html>
);

export default SkateAppEmail;
