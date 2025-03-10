import { Skeleton, keyframes, Stack } from "@mui/material";

export default function LoadingSkeleton({
  height,
  width,
  text,
}: {
  height: number;
  width: string;
  text: string;
}) {
  const fastPulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;
  return (
    <Stack
      sx={{ marginTop: "30px" }}
      gap={"15px"}
      direction={text as "row" | "column"}
      flexWrap={"wrap"}
    >
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
    </Stack>
  );
}
