import {
  Body,
  Head,
  Html,
  Img,
  Link,
  Text,
} from "@react-email/components";
//import * as React from "react";
import React from 'react';


export const SkateAppEmail = () => (
  <Html>
    <Head></Head>
    <Body>
    <div
        style={{
          width: '736px', 
          height: '38px', 
          borderTopLeftRadius: '24px', 
          borderTopRightRadius: '24px', 
          backgroundColor: 'black',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: '2px solid black',
        }}
      >
        <h1
          style={{
            width: '134px',
            height: '24px',
            borderTop: '7px',
            borderLeft: '301px',
            color: '#FFFFFF', 
            fontFamily: 'Roboto', 
            fontWeight: 600,
            fontSize: '14px', 
            lineHeight: '24px'
          }}
        >
          Reset Your Password
        </h1>
      </div>

      <Img
        src="https://s3-alpha-sig.figma.com/img/07d7/2cc3/02ed10a7ad52a0c4333be41a23448f40?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C65vI6GS3J0to8YSAy6UpMdUq4Q9WyRmxdbeCGHywud8aaLejIPguO0mUBDbmMA0c1tWDAZzc4rJSUOgfAUfjHhONXoOotTyHIZCdavHW8lZRjgIUUAb5ugl63seyKQrviYBtl~aLlsQJvOQhzEjOgMqcDdqgeKjO1HEqdW2r4~0zYPZHu5hzsSXlKMTqFl0mOgK30YnxXDWN9C37JLHeiwFNl7VGYtZGHqPsshSVBDeW5-Umz9kSkQ60ym9mx4R4VPybFHQ0yymhhBozo~yiAnKpkZaWeE7pa4ysU8TozNMhNyh9PUULzNIh5kN~3twVsZo5sOxiOmQNLXK-~vTjg__"
        alt="Password Reset"
        style={{
          width: '443px', 
          height: '202.25px',
          position: 'absolute', 
          top: '113px', 
          left: '146px',
        }}
      />

<Text
        style={{
          width: '123px', 
          height: '24px', 
          position: 'absolute', 
          top: '403px', 
          left: '307px', 
          fontFamily: 'Roboto', 
          fontWeight: 700, 
          fontSize: '12px', 
          lineHeight: '24px', 
          letterSpacing: '2%',
          color: '#0C3461',
          whiteSpace: 'nowrap',
        }}
      >
        HELLO MARCO DAVIS
      </Text>

      <Text
      style={{
        width: '219.57px',
        height: '49.57px',
        top: '433px',
        left: '258px',
        padding: '2.78px',
        gap: '11.52px',
        position: 'absolute',
        fontFamily: 'Roboto',
        fontWeight: 800,
        fontSize: '32.25px',
        lineHeight: '43.76px',
        alignItems: 'Center',
        color: '#343131',
      }}
      >
        Don't be panic!
      </Text>

      <div
      style={{
        width: '500px',
        height: '48px',
        position: 'absolute',
        top: '500px',
        left: '118px',
        transform: 'rotate(0deg)', 
        font: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '2%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        color: '#343131',
       }}
      >
      <div>
        We received a request to reset the password for your account. Please click
      </div>

      <div>
        the button below to create a new password.
      </div>
      </div>

      <div
      onClick={() => window.location.href = "https://mycollegelease.com/request/resetpassword/too"}
      style={{
        position: 'absolute',
        width: '244px',
        height: '54px', 
        top: '580px', 
        left: '246px', 
        backgroundColor: '#ED4944',
        borderRadius: '100px', 
        padding: '14px 24px 14px 24px', 
        gap: '10px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        cursor: 'pointer', 
        boxShadow: '0px 8px 26px 0px #EC535B40',
        boxSizing: 'border-box',

      }}
    >
      <div
        style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '26px',
          color: '#FFFFFF', 
          letterSpacing: '2%',
          textAlign: 'center',
        }}
      >
        Reset My Password
      </div>
      </div>
    </Body>
  </Html>
);

export default SkateAppEmail;

