export const getShuffledQuestions = (quizData, count = 10) => {
  try {
    const allQuestions = [];
    quizData.forEach((subject) => {
      subject.subsubjects.forEach((sub) => {
        sub.difficulties.forEach((level) => {
          allQuestions.push(...level.questions);
        });
      });
    });
    return allQuestions.sort(() => 0.5 - Math.random()).slice(0, count);
  } catch (err) {
    console.error("Error while shuffling questions:", err);
    throw new Error("Failed to process quiz questions.");
  }
};
