import { useEffect, useState } from "react";
import { Button, Card } from "@ui/components";
import { decideUI } from "./shared-agent/ ui-agent";

const components: any = { Button, Card };

export default function App() {
  const [mode, setMode] = useState<UIRequest["mode"]>("basic");
  const [decision, setDecision] = useState<any>(null);

  useEffect(() => {
    decideUI({
      intent: "create a card",
      mode,
    }).then(setDecision);
  }, [mode]);

  if (!decision) return <div>Loading AI UI…</div>;

  const Component = components[decision.component];
  if (!Component) return <div>Unknown component</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2>AI-Driven UI Demo</h2>

      {/* 🔘 MODE CONTROLS */}
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setMode("basic")}>Basic</button>{" "}
        <button onClick={() => setMode("accessible")}>Accessible</button>{" "}
        <button onClick={() => setMode("premium")}>Premium</button>
      </div>

      {/* 🧠 RENDERED UI */}
      <Component {...decision.props} />
    </div>
  );
}
