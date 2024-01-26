const getGoal = (req, res) => {
  res.status(200).json({ message: "GET GOAL" });
};

const addGoal = (req, res) => {
  res.status(200).json({ message: "ADD GOAL" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: "UPDATE GOAL" });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: "DELETE GOAL" });
};

export { getGoal, addGoal, updateGoal, deleteGoal };
