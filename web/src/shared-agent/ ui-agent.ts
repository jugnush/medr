import { mockLLM } from "./mock-llm";
import { validateDecision } from "./validate";

export type UIRequest = {
  intent: string;
  mode: "basic" | "accessible" | "premium";
};

export async function decideUI(request: UIRequest) {
  console.log("🧠 decideUI called with:", request);
  const { intent, mode } = request;

  // 1️⃣ Fetch metadata from MCP server
  const res = await fetch(
    "http://localhost:3333/resources/ui%3A%2F%2Fcomponents"
  );
  const metadata = await res.json();

  // 2️⃣ Ask AI (mocked LLM) to plan UI
  const plan = await mockLLM(intent);
  if (!plan) return null;

  const { component, props } = plan;
  const componentMeta = metadata[component];
  if (!componentMeta) return null;

  // 3️⃣ MODE-BASED DIFFERENTIATION (⭐ THIS IS THE EXTENSION)
  if (component === "Card") {
    if (mode === "basic") {
      props.variant = "plain";
    }

    if (mode === "accessible") {
      props.variant = "outlined";
      props["aria-label"] = props.title;
    }

    if (mode === "premium") {
      props.variant = "elevated";
      props.highlight = true;
    }
  }

  if (component === "Button") {
    if (mode === "basic") {
      props.variant = "secondary";
    }

    if (mode === "accessible") {
      props.variant = "primary";
      props["aria-label"] = props.label;
    }

    if (mode === "premium") {
      props.variant = "primary";
      props.size = "large";
    }
  }

  const decision = { component, props };

  // 4️⃣ Safety validation
  return validateDecision(decision, metadata) ? decision : null;
}