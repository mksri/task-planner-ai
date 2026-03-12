export const detectBusyDay = (req, res) => {

  const { meetings } = req.query;

  let mode = "normal";

  if(meetings >= 5){
    mode = "busy";
  }

  const recommendations = mode === "busy"
    ? [
        "Use 10-15 minute meals",
        "Limit tasks to top 3 priorities",
        "Auto generate grocery list",
        "Take short breaks between meetings"
      ]
    : [
        "Full meal plan available",
        "Complete normal task schedule",
        "Plan groceries for the week"
      ];

  res.json({
    mode,
    meetings,
    recommendations
  });

};