export function generateProps(componentMeta: any) {
    const props: Record<string, any> = {};
  
    for (const propName in componentMeta.props) {
      const prop = componentMeta.props[propName];
  
      if (prop.default !== undefined) {
        props[propName] = prop.default;
      } else if (prop.type === "string") {
        props[propName] = `${propName}`;
      } else {
        props[propName] = null;
      }
    }
  
    return props;
  }
  