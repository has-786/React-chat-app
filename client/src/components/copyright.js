import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
const Copyright = () =>
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      Sociowe.com
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>;

export default Copyright;
