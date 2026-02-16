const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const fetchMatches = async () => {
  const res = await fetch(`${API_URL}/matches`);
  if (!res.ok) throw new Error("Failed to fetch matches");
  return res.json();
};

export const updateMatchApi = async (id, data) => {
  const res = await fetch(`${API_URL}/matches/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update match");

  return res.json();
};

export const resetMatchesApi = async () => {
  const res = await fetch(`${API_URL}/reset`, {
    method: "PUT",
  });

  if (!res.ok) throw new Error("Failed to reset matches");
};
