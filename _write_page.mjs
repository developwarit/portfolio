import fs from "fs"
const c = fs.readFileSync("app/courses/html-css-masterful/page.tsx","utf8")
console.log("lines:",c.split("
").length)
console.log("hasVideoRef:",c.includes("videoRef"))
console.log("hasOnComplete:",c.includes("onComplete"))
