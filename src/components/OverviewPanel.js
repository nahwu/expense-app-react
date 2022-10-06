//import * as React from 'react';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./OverviewPanel.css";
import CategoryPieChart from "./CategoryPieChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function OverviewPanel() {
  return (
    <div style={{paddingTop: "80px", paddingLeft: "80px", paddingRight: "15px"}} >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        className="stack-holder"
      >
        <Item>Item 1111111111111111111</Item>
        <Item>
          Breakdown
          <CategoryPieChart />
        </Item>
        <Item>Item 32333333333333322222222</Item>
      </Stack>
    </div>
  );
}
