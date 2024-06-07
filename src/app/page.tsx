import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { nameFont } from "@/utils/font";

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
      </Stack>

      <Stack
        sx={{
          backgroundImage: "url(/images/back_screen.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
          width: "100%",
        }}
        spacing={2}
        direction="column"
        useFlexGap
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Stack
          // spacing={2}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box
            sx={{
              display: "inline-block",
              width: "100px",
              height: "100px",
            }}
          >
            <Typography variant="h3" gutterBottom>
              ABOUT
            </Typography>
          </Box>
        </Stack>
        <Stack
          spacing={2}
          sx={{ width: 800, height: 400 }}
          direction="row"
          justifyContent="space-around"
        >
          <Box
            sx={{
              backgroundImage: "url(/images/about_me.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50%",
              boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
              border: "3px solid rgba(255,255,255,0.3)",
              overflow: "hidden",
              width: "40%",
              height: "80%",
            }}
          ></Box>
          {/* <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '40%' }}>
            <img style={{ width: '100%' }} src="/images/Me.png" alt="me" />
          </Box> */}

          <Stack
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Box color={"black"}>
              <Typography variant="h4" gutterBottom>
                Teruyuki Miyamoto
              </Typography>
              <Typography variant="h6" gutterBottom>
                所属
              </Typography>
              <Typography variant="body1" gutterBottom>
                京都大学大学院 情報学研究科 通信情報システムコース 1年
              </Typography>
              <Typography variant="h6" gutterBottom>
                趣味
              </Typography>
              <Typography variant="body1" gutterBottom>
                魚釣り/APEX/原神
              </Typography>
              <Typography variant="h6" gutterBottom>
                特技
              </Typography>
              <Typography variant="body1" gutterBottom>
                ラスト一投
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={2} direction="row" marginTop="5px">
        {/* <Box
          sx={{
            display: 'inline-block',
            width: '100px',
            height: '50px',
            backgroundColor: 'blue',
          }}
        >
          Hello World!
        </Box>

        <Box
          sx={{ display: 'inline-block', width: '100px', height: '50px', backgroundColor: 'green' }}
        >
          Hello World!
        </Box> */}
      </Stack>
    </>
  );
}
