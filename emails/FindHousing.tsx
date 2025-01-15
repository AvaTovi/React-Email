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
          boxSizing: "border-box",
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
            textAlign: "center",
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
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#FF5A60",
        }}
      >
        <div
          style={{
            //ARE YOU READY section
            width: "93px",
            height: "240px",
            top: "149px",
            left: "322px",
            transform: "rotate(0deg)",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "2%",
            alignItems: "center",
            textAlign: "center",
            whiteSpace: "nowrap",
            color: "#FFFFFF",
          }}
        >
          ARE YOU READY
        </div>

        <div
          style={{
            width: "510.63px",
            height: "132px",
            top: "235px",
            left: "113px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "48.63px",
            lineHeight: "66px",
            textAlign: "center",
            position: "absolute",
            //alignItems: "center",
            //display: "flex",
            //justifyContent: "center",
            color: "#FFFFFF",
            border: "2px solid black",
          }}
        >
          FIND HOUSING NEAR YOUR CAMPUS
        </div>
      </div>
    </Body>
  </Html>
);

export default SkateAppEmail;
