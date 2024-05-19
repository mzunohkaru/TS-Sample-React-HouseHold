import React from "react";
import { Card, Grid, CardContent, Stack, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const MonthlySummary = () => {
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      direction="row"
      justifyContent="center"
    >
      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card
          sx={{
            borderRadius: "10px",
            bgcolor: (theme) => theme.palette.incomeColor.main,
            color: "white",
            flexGrow: 1,
          }}
        >
          <CardContent sx={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            <Stack direction="row">
              <ArrowUpwardIcon sx={{ fontSize: "2rem" }} />
              <Typography>収入</Typography>
            </Stack>
            <Typography
              textAlign={"right"}
              variant="h5"
              fontWeight={"fontWeightBold"}
              sx={{
                wordBreak: "break-word",
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              ¥300
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card
          sx={{
            borderRadius: "10px",
            bgcolor: (theme) => theme.palette.expenseColor.main,
            color: "white",
            flexGrow: 1,
          }}
        >
          <CardContent sx={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            <Stack direction="row">
              <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
              <Typography>支出</Typography>
            </Stack>
            <Typography
              textAlign={"right"}
              variant="h5"
              fontWeight={"fontWeightBold"}
              sx={{
                wordBreak: "break-word",
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              ¥200
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card
          sx={{
            borderRadius: "10px",
            bgcolor: (theme) => theme.palette.balanceColor.main,
            color: "white",
            flexGrow: 1,
          }}
        >
          <CardContent sx={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            <Stack direction="row">
              <AccountBalanceIcon sx={{ fontSize: "2rem" }} />
              <Typography>残高</Typography>
            </Stack>
            <Typography
              textAlign={"right"}
              variant="h5"
              fontWeight={"fontWeightBold"}
              sx={{
                wordBreak: "break-word",
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              ¥100
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MonthlySummary;
