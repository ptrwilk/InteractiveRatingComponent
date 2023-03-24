import { useState } from "react";
import RatingComponent from "../RatingComponent/RatingComponent";
import SummaryComponent from "../SummaryComponent/SummaryComponent";

const InteraciveRatingComponent = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>(
    undefined
  );
  const [submited, setSubmited] = useState(false);

  const handleSubmitClick = () => {
    if (selectedNumber) {
      setSubmited(true);
    }
  };
  const onNumberClick = (value: number) => {
    setSelectedNumber(value);
  };

  return (
    <>
      <RatingComponent
        visible={!submited}
        selectedNumber={selectedNumber}
        onNumberClick={onNumberClick}
        onSubmitClick={handleSubmitClick}
      ></RatingComponent>
      <SummaryComponent
        visible={submited}
        number={selectedNumber}
      ></SummaryComponent>
    </>
  );
};

export default InteraciveRatingComponent;
