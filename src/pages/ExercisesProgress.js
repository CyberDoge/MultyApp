import React from "react";
import Header from "widgets/exercisesProgress/Header";
import Progress from "widgets/exercisesProgress/Progress";
import ProgressTable from "widgets/exercisesProgress/ProgressTable";

const ExercisesProgress = () => {
  return (
    <div>
      <Header />
      <Progress />
      <ProgressTable />
    </div>
  );
};

export default ExercisesProgress;
