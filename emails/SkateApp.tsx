import {
  Body,
  Head,
  Html,
  Img,
  Link,
  Text,
} from "@react-email/components";
import * as React from "react";

export const SkateAppEmail = () => (
  <Html>
    <Head></Head>
    <Body>
    <div
        style={{
          width: '736px', // Set the width of the header
          height: '38px', // Set the height of the header
          borderTopLeftRadius: '24px', // Rounded top-left corner
          borderTopRightRadius: '24px', // Rounded top-right corner
          backgroundColor: 'black', // Set the inside color to black
          display: 'flex', // Use flexbox to center content
          alignItems: 'center', // Vertically center the content
          justifyContent: 'center', // Horizontally center the content
          border: '2px solid black', // Set the black border around the header
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

    </Body>
  </Html>
);

export default SkateAppEmail;

