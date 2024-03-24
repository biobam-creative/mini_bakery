export default function ComponentDisplay({ path, component }) {
  let pathParts = path.split("/");
  if (pathParts.length === 4) {
    const mainPath = pathParts[1];
    const uidb64 = pathParts[2];
    const token = pathParts[3];
    if (path === `/${mainPath}/${uidb64}/${token}`) {
      return;
    }
  } else if (
    path === "/" ||
    path === "/login" ||
    path === "/register" ||
    path === "/password-reset" ||
    path === "/password-reset-request-response"
  ) {
    return;
  }
  return component;
}
