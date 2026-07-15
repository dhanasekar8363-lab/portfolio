import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "./VisitorCounter.css";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    async function updateVisitors() {
      const viewed = localStorage.getItem("portfolio-visited");

      if (!viewed) {
        await supabase.rpc("increment_visitors");
        localStorage.setItem("portfolio-visited", "true");
      }

      const { data } = await supabase
        .from("portfolio_stats")
        .select("visitors")
        .eq("id", 1)
        .single();

      if (data) setVisitors(data.visitors);
    }

    updateVisitors();
  }, []);

  return (
    <div className="visitor-badge">
      <span className="eye">👀</span>

      <div>
        <h3>{visitors.toLocaleString()}</h3>
        <p>Visitors</p>
      </div>
    </div>
  );
}