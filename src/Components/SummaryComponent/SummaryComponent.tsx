import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { ReactComponent as Icon } from "../../assets/illustration-thank-you.svg";

interface ISummaryComponentProps {
  visible?: boolean;
  number?: number;
}

const SummaryComponent = ({
  visible = true,
  number,
}: ISummaryComponentProps) => {
  if (!visible) {
    return null;
  }
  return (
    <Box className={styles["container"]}>
      <Icon />
      <Box className={styles["result"]}>
        <Typography variant="body1" className={styles["result-text"]}>
          You selected {number} out of 5
        </Typography>
      </Box>
      <Typography variant="h1" className={styles["title"]}>
        Thank you!
      </Typography>
      <Typography variant="body1" className={styles["text"]}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Typography>
    </Box>
  );
};

export default SummaryComponent;
