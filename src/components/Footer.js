import { Grid, Typography, Box, Slider, Button } from "@material-ui/core";
import { styled } from "@material-ui/core";
import React from "react";
const marks = [
  {
    value: 0,
    label: "1",
  },
  {
    value: 20,
    label: "25",
  },

  {
    value: 100,
    label: "100",
  },
];
const PrettoSlider = styled(Slider)({
  color: "#2c7de6",
  width: "90%",
  "& .MuiSlider-track": {
    border: "5px solid #2c7de6",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

function Footer() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          lg={12}
          container
          justifyContent="space-between"
          direction="row"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="2rem"
          >
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Quality of results
            </Typography>
            <Box display="flex" marginTop="15px">
              <Button variant="contained" style={{ background: "#2c7de6" }}>
                HD
              </Button>
              <Button
                variant="outlined"
                size="small"
                style={{
                  marginLeft: "3px",
                  borderColor: "#2c7de6",
                }}
              >
                SD
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="2rem"
          >
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Limit Result
            </Typography>
            <Box sx={{ width: 300, marginTop: "15px" }}>
              <PrettoSlider
                aria-label="Custom marks"
                defaultValue={20}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="2rem"
          >
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Quality of results
            </Typography>
            <Box display="flex" marginTop="15px">
              <Button variant="contained" style={{ background: "#2c7de6" }}>
                HD
              </Button>
              <Button
                variant="outlined"
                size="small"
                style={{ marginLeft: "5px", borderColor: "#2c7de6" }}
              >
                SD
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="2rem"
          >
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Limit Result
            </Typography>
            <Box sx={{ width: 300, marginTop: "15px" }}>
              <PrettoSlider
                aria-label="Custom marks"
                defaultValue={20}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
