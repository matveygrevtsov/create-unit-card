export const getWindowBasePath = (endsWithSlash?: boolean) => {
  const pathWithoutSlash = getWindowBasePathWithoutSlash();
  return endsWithSlash ? `${pathWithoutSlash}/` : pathWithoutSlash;
};

function getWindowBasePathWithoutSlash() {
  const { origin } = window.location;
  return origin.endsWith("/") ? origin.slice(0, -1) : origin;
}
