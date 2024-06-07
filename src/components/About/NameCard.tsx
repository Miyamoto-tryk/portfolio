import { Spacer } from "@/utils/Spacer";
import { Stack, Box, Typography } from "@mui/material";

export const NameCard = () => {
  return (
    <>
      <Stack
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
        }}
        direction="row"
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Spacer size={5} />
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
            ラスト一投で釣る
          </Typography>
        </Box>
        <Spacer size={5} />
      </Stack>
    </>
  );
};
