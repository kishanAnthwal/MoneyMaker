import { useEffect, useState } from "react";
import "./batting.css";
import { GoDotFill } from "react-icons/go";
import { BattingTable } from "../components/BattingTable";


const Batting = () => {
  const [match, setMatch] = useState(null);
  const [latestMatches, setLatestMatches] = useState([]);
 

  const KEY = `c3b13733-6f73-43c6-bb93-c2cf6c3ae2bd`; // Testing API
  const API = `https://api.cricapi.com/v1/cricScore?apikey=${KEY}`;

  const getData = async () => {
    try {
      const res = await fetch(API);
      const result = await res.json();
      console.log(result);

      if (result && result.data) {
        const liveMatch = result.data.find(
          (match) => match.ms === "Live" || match.status?.includes("Live")
        );
        setMatch(liveMatch || result.data[0]); 

        const sortedMatches = result.data
          .filter((m) => m.status !== "Match not started")
          .slice(0, 6);
        setLatestMatches(sortedMatches);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">


      <div className="score_board">
        <img src="img_06.jpg" alt="Scoreboard" />
        {match ? (
          <div key={match.id || match.matchId} className="overlay flex">
            <div className="team_1">
              <p>{match.t1 || "Team 1"}</p>
              <p>{match.t1s || "0/0"}</p>
              <p>{match.t1Overs || "0.0"}</p>
            </div>

            <div className="live_score">
              <div className="flex center live_icon">
                <GoDotFill className="live_icon" />
                <h3 className="m-x-4">Live Score</h3>
              </div>
              <div className="score">{match.status || "No Status"}</div>
              <div className="over">{match.ms || "Match Info"}</div>
            </div>

            <div className="team_2">
              <p>{match.t2 || "Team 2"}</p>
              <p>{match.t2s || "0/0"}</p>
              <p>{match.t2Overs || "0.0"}</p>
            </div>
          </div>
        ) : (
          <p>Loading live match score...</p>
        )}
      </div>

      <div className="match_table">
        <table>
          <thead>
            <tr>
              <th>Series</th>
              <th>Type</th>
              <th>Team1 Score</th>
              <th>Team2 Score</th>
            </tr>
          </thead>
          <tbody>
            {latestMatches.length > 0 ? (
              latestMatches.map((match) => (
                <tr key={match.id || match.matchId}>
                  <td>
                    {match.t1} <span>Vs</span> {match.t2}
                  </td>
                  <td>{match.matchType || "Unknown"}</td>
                  <td>
                    {match.t1s || "0/0"} ({match.t1Overs || "0.0"} ov)
                  </td>
                  <td>
                    {match.t2s || "0/0"} ({match.t2Overs || "0.0"} ov)
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Loading latest matches...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <BattingTable />
    </div>
  );
};

export default Batting;
