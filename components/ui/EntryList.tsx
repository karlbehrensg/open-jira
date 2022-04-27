import { List, Paper } from "@mui/material";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
