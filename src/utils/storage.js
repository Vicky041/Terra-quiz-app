export const LOCAL_KEY = 'quizHistory';

export const saveResultToStorage = (result) => {
  const existing = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  const updated = [...existing, result];
  localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  return updated;
};

export const getHistoryFromStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
};

export const clearHistory = () => {
  localStorage.removeItem(LOCAL_KEY);
};