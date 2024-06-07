import { Stack, Box, Typography } from "@mui/material";
import { NameCard } from "./NameCard";
import { wrap } from "module";
import { Spacer } from "@/utils/Spacer";

export const About = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundImage: "url(/images/back_screen.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
          width: "100%",
          height: 500,
        }}
        spacing={2}
        direction="column"
        useFlexGap
        justifyContent="flex-start"
        alignItems="center"
      >
        <Stack
          // spacing={2}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "150px" }}
        >
          <Box
            sx={{
              display: "inline-block",
              height: "100px",
            }}
          >
            <Typography variant="h3" gutterBottom>
              ABOUT
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
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
              width: "300px",
              height: "100%",
            }}
          ></Box>
          <Spacer size={30} horizontal={true} />
          <NameCard></NameCard>
        </Stack>
        <Spacer size={10} />
      </Stack>
    </>
  );
};
