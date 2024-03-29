export default function ({ path, query, hash }) {
    if (path === "/" || !path.endsWith("/")) return

    let nextPath = path.replace(/\/+$/, "") || "/"
    if (nextPath === "/portfolio") {
        nextPath = '/'
        hash = '#portfolio'
    }
    const nextRoute = { path: nextPath, query, hash }
  
    return navigateTo(nextRoute, { redirectCode: 301 })
  }
  