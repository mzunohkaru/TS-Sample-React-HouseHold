import { Box } from "@mui/material";
import React from "react";
import MonthlySummary from "../components/MonthlySummary";
import Calendar from "../components/Calendar";
import TransactionMenu from "../components/TransactionMenu";
import TransactionForm from "../components/TransactionForm";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Left Contents */}
      <Box sx={{ flexGrow: 1 }}>
        <MonthlySummary />
        <Calendar />
      </Box>

      {/* Rigth Contents */}
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </Box>
  );
}
