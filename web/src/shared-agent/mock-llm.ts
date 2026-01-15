export async function mockLLM(intent: string) {
    const normalized = intent.toLowerCase();
  
    if (normalized.includes("card")) {
      return {
        component: "Card",
        props: {
          title: "AI Generated ddddddaaaa",
          children: "This UI was planned by an AI agent",
        },
      };
    }
  
    if (normalized.includes("button")) {
      return {
        component: "Button",
        props: {
          label: "AI Button",
        },
      };
    }
  
    return null;
  }
  