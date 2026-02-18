const getDate = (duration) => {
  const now = new Date();

  switch (duration) {
    case "day":
      now.setDate(now.getDate() - 1);
      break;
    case "week":
      now.setDate(now.getDate() - 7);
      break;
    case "month":
      now.setMonth(now.getMonth() - 1);
      break;
    case "year":
      now.setFullYear(now.getFullYear() - 1);
      break;
    default:
      now.setDate(now.getDate() - 7);
  }

  return now.toISOString().split("T")[0];
};

export default getDate;
