import { Avatar, Box, Button, List, ListItem, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { ReactComponent as Icon } from "../../assets/icon-star.svg";
import classNames from "classnames";

interface IRatingComponentProps {
  selectedNumber?: number;
  visible?: boolean;
  onNumberClick?: (value: number) => void;
  onSubmitClick?: () => void;
}

const RatingComponent = ({
  selectedNumber,
  visible = true,
  onNumberClick,
  onSubmitClick,
}: IRatingComponentProps) => {
  const handleNumberClick = (value: number) => {
    if (selectedNumber !== value) {
      onNumberClick?.(value);
    }
  };

  if (!visible) {
    return null;
  }
  return (
    <Box className={styles["container"]}>
      <Avatar className={styles["circle"]}>
        <Icon />
      </Avatar>
      <Typography variant="h1" className={styles["title"]}>
        How did we do?
      </Typography>
      <Typography variant="body1" className={styles["text"]}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Typography>
      <List className={styles["numbers"]}>
        {[1, 2, 3, 4, 5].map((number, key) => (
          <ListItem key={key} sx={{ p: 0, width: "auto" }}>
            <Avatar
              onClick={() => handleNumberClick(number)}
              className={classNames(styles["circle"], {
                [styles["circle-selected"]]: selectedNumber === number,
              })}
            >
              <Typography
                variant="body1"
                className={classNames(styles["number-text"], {
                  [styles["number-text-selected"]]: selectedNumber === number,
                })}
              >
                {number}
              </Typography>
            </Avatar>
          </ListItem>
        ))}
      </List>
      <Button onClick={onSubmitClick} className={styles["btn"]}>
        Submit
      </Button>
    </Box>
  );
};

export default RatingComponent;
