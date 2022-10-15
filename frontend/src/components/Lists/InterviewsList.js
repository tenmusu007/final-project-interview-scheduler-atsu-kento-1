import React, { useEffect, useState } from "react";

const InterviewsList = ({ day_id }) => {
  const [interviews, setInterviews] = useState([]);
  const interviewsRender = interviews.map((interview) => {
    return;
  });
  useEffect(() => {
    const getInterviewsPerDay = async () => {
      const res = await fetch(`/interviews/${day_id}`);
      const data = await res.json();
      setInterviews(data);
    };
  }, []);
  return <div>InterviewsList</div>;
};

export default InterviewsList;
