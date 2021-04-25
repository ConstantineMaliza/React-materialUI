import React, { useState } from "react";
import Typograph from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: "violet",
  //   "&:hover": {
  //     backgroundColor: "blue",
  //   },
  // },
  filled: { marginTop: 20, marginBottom: 20, display: "block" },
});

export default function Create() {
  const classes = useStyle();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (detail == "") {
      setDetailError(true);
    }

    if (title && detail) {
      console.log(title, detail);
    }
  };

  return (
    <Container>
      Create page
      <Typograph color="primary" component="h1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nisi
        commodo, feugiat sapien non, luctus dui. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Mauris sagittis pulvinar est, quis
        vehicula turpis euismod rutrum. Ut quis sapien euismod, consectetur
        lacus sit amet, cursus enim. Donec pretium id sapien nec rutrum. Mauris
        id magna metus. Integer elementum ut nibh a gravida. Mauris sed turpis
        ut nisi pellentesque viverra at sit amet nisi. Pellentesque feugiat
        maximus mauris, a luctus nunc sollicitudin sit amet. Cras eu nisl
        auctor, tincidunt velit non, facilisis turpis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </Typograph>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.filled}
          label="firstaname"
          variant="outlined"
          required
          fullWidth
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetail(e.target.value)}
          className={classes.filled}
          label="text"
          variant="outlined"
          multiline
          rows={5}
          required
          fullWidth
          error={detailError}
        />
        <Button
          variant="contained"
          type="submit"
          // className={classes.btn}
          onClick={() => console.log("hello")}
          color="primary"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
      <br />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="disable" fontSize="small" />
      <AcUnitOutlinedIcon color="secondary" />
    </Container>
  );
}
