type ComponentType = {
  name?: string;
  displayName?: string;
};

function getDisplayName(WrappedComponent: ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default getDisplayName;
