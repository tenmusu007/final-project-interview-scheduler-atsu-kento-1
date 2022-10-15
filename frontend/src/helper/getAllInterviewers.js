const getAllInterviewers = async () => {
  const response = await fetch(`/interviewers`);
  const allInterviewers = await response.json();
  return allInterviewers;
};

export default getAllInterviewers;
