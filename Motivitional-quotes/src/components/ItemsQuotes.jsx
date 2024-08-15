import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function ItemsQuotes({ author, quotes }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="flex">
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>{quotes}</Item>
          <p>Author:{author}</p>
        </Stack>
      </Box>
    </div>
  );
}
