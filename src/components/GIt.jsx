import React, { useState, useEffect } from "react";

export function GitHubFollowers() {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username === "") {
      return;
    }

    const fetchFollowers = async () => {
      setLoading(true);
      setError(null);
      setFollowers(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("Utilisateur non trouvé");
        }
        const data = await response.json();
        setFollowers(data.followers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [username]);

  return (
    <div>
      <h2>GitHub Followers Checker</h2>
      <input
        type="text"
        placeholder="Entrez un nom d'utilisateur GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
      />
      <div>
        {loading && <p>Chargement...</p>}
        {error && <p style={{ color: "red" }}>Erreur : {error}</p>}
        {followers !== null && (
          <p>
            L'utilisateur <strong>{username}</strong> a <strong>{followers}</strong> abonnés.
          </p>
        )}
      </div>
    </div>
  );
}
