import http from "http";
import { readFileSync } from "fs";
import path from "path";
const metadataPath = path.resolve(process.cwd(), "../components-lib/dist/component-metadata.json");
const componentMetadata = JSON.parse(readFileSync(metadataPath, "utf-8"));
const server = http.createServer((req, res) => {
    // ✅ CORS HEADERS (THIS FIXES YOUR ISSUE)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // Handle preflight
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }
    // MCP: list resources
    if (req.method === "GET" && req.url === "/resources") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify([
            {
                uri: "ui://components",
                name: "UI Component Metadata",
                mimeType: "application/json",
            },
        ]));
        return;
    }
    // MCP: read resource
    if (req.method === "GET" &&
        req.url?.startsWith("/resources/") &&
        decodeURIComponent(req.url.split("/resources/")[1]) === "ui://components") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(componentMetadata, null, 2));
        return;
    }
    res.writeHead(404);
    res.end();
});
server.listen(3333, () => {
    console.log("MCP-compatible server running on http://localhost:3333");
});
