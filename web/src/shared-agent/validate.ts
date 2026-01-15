export function validateDecision(decision: any, metadata: any) {
    if (!decision) return false;
  
    const componentMeta = metadata[decision.component];
    if (!componentMeta) return false;
  
    for (const propName in componentMeta.props) {
      const prop = componentMeta.props[propName];
      if (prop.required && decision.props[propName] == null) {
        return false;
      }
    }
  
    return true;
  }
  