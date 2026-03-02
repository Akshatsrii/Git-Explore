import axios from "axios";
import express from "express";
export const getTrending = async (req, res, next) => {
  try {
    const {
      duration = "week",
      limit = 10,
      language,
      sort = "stars",
      page = 1,
      search = ""
    } = req.query;

    const getDate = (duration) => {
      const now = new Date();
      if (duration === "day") now.setDate(now.getDate() - 1);
      if (duration === "week") now.setDate(now.getDate() - 7);
      if (duration === "month") now.setMonth(now.getMonth() - 1);
      if (duration === "year") now.setFullYear(now.getFullYear() - 1);
      return now.toISOString().split("T")[0];
    };

    const date = getDate(duration);

    let query = search
      ? `${search} in:name,description`
      : `created:>${date}`;

    if (language) query += ` language:${language}`;

    const response = await axios.get(
      "https://api.github.com/search/repositories",
      {
        params: {
          q: query,
          sort,
          order: "desc",
          per_page: limit,
          page
        },
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};
export default router;