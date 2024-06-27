import { Box, Link, Stack, Typography } from "@mui/material";
import population_graph_img from "../../public/images/population_graph.png";
import { Spacer } from "@/utils/Spacer";

export const TodoApp = () => {
  return (
    <>
      <Stack direction={"column"} alignItems={"center"} sx={{ width: "80%" }}>
        <Stack
          direction="column"
          sx={{
            borderRadius: 2,
            backgroundColor: "Gray",
            width: "100%",
            border: "3px solid rgba(255,255,255,0.3)",
          }}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Spacer size={20} />
          <Stack direction={"row"}>
            <Spacer size={20} horizontal={true} />
            <Stack>
              <Link href="https://github.com/Miyamoto-tryk/clean-todo-app">
                <Box>TODOアプリ(製作中...)</Box>
                <Box
                  justifyContent="center"
                  sx={{
                    backgroundImage:
                      "url(/images/computer_programming_man.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    border: "3px solid rgba(0,0,0,0.3)",
                    backgroundColor: "White",
                    borderRadius: 2,
                    overflow: "hidden",
                    width: "100%",
                    height: 100,
                  }}
                ></Box>
              </Link>

              <Box>
                製作中
                <li>TypeScript</li>
                <li>React/Next.js</li>
                <li>prisma</li>
                <li>クリーンアーキテクチャ</li>
                <li>(予定)Styled-components</li>
                <li>(予定)レスポンシブデザイン対応</li>
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
