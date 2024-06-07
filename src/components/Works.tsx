import { Box, Link, Stack, Typography } from "@mui/material";
import population_graph_img from "../../public/images/population_graph.png";

export const Works = () => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          WORKS
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}>
        <Stack
          direction="column"
          sx={{ borderRadius: 2, backgroundColor: "Gray", width: "80%" }}
        >
          <Link href="https://population-graph-seven.vercel.app/">
            <Box>都道府県別人口推移グラフ</Box>
            <Box
              justifyContent="center"
              sx={{
                backgroundImage: "url(/images/population_graph.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                overflow: "hidden",
                width: "100%",
                height: 100,
              }}
            ></Box>
          </Link>

          <Box>
            初めてデプロイしたwebアプリケーション。チェックを付けることで動的にグラフを生成
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
