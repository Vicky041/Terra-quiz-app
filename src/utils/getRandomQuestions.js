export const getRandomQuestions = (questions, count = 10) => {
  if (!Array.isArray(questions)) return [];
  return questions
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
