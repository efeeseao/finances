const staticFinances = "my-finances-site"
const assets = [
  "/",
  "/index.html",
  "assets/css/styles.css",
  "js/app.js",
  "assets/images/expense.svg",
  "assets/images/income.svg",
  "assets/images/minus.svg",
  "assets/images/plus.svg",
  "assets/images/total.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFinances).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})