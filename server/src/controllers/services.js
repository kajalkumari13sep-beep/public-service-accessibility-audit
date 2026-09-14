import { findServices } from "../services/serviceSearch.js";

export function searchServices(req, res) {
  const query = String(req.query.query || "").trim();
  const results = findServices(query);
  res.json({ results });
}
