import { Box, Link, Stack, Typography } from "@mui/material";
import population_graph_img from "../../public/images/population_graph.png";
import { Spacer } from "@/utils/Spacer";

export const Works = () => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"center"}>
        <Typography variant="h3" gutterBottom>
          WORKS
        </Typography>
      </Stack>

      <Stack direction={"column"} alignItems={"center"}>
        <Stack
          direction="column"
          sx={{
            borderRadius: 2,
            backgroundColor: "Gray",

            border: "3px solid rgba(255,255,255,0.3)",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spacer size={20} />
          <Stack direction={"row"}>
            <Spacer size={20} horizontal={true} />
            <Stack>
              <Link
                href="https://population-graph-seven.vercel.app/"
                sx={{ width: "80%" }}
              >
                <Box>都道府県別人口推移グラフ</Box>
                <Box
                  justifyContent="center"
                  sx={{
                    backgroundImage: "url(/images/population_graph.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderRadius: 2,
                    overflow: "hidden",
                    width: "100%",
                    height: 100,
                  }}
                ></Box>
              </Link>

              <Box>
                初めてデプロイしたwebアプリケーション。チェックを付けることで動的にグラフを生成。
                <li>TypeScript</li>
                <li>React/Next.js</li>
                <li>レスポンシブデザイン対応</li>
              </Box>
            </Stack>
            <Spacer size={20} horizontal={true} />
          </Stack>
          <Spacer size={20} />
        </Stack>
      </Stack>
    </>
  );
};
