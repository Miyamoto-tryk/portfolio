import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { nameFont } from "@/utils/font";
import { Works } from "@/components/Works";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage:
            "url(https://user0514.cdnw.net/shared/img/thumb/21830aIMGL99841974_TP_V.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: "100px",
        }}
      >
        <div
          className={nameFont.className}
          style={{ fontSize: "30px", color: "cadetblue" }}
        >
          Teruyuki Miyamoto
        </div>
        <div
          className={nameFont.className}
          style={{ fontSize: "20px", color: "cadetblue" }}
        >
          Web Development Enthusiast
        </div>
      </Stack>

      <About />
      <Works />
      <Stack spacing={2} direction="row" marginTop="5px"></Stack>
    </>
  );
}
