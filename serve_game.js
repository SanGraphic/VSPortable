const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = path.join(__dirname, '.webpack/renderer');

const MIME = {
    '.html': 'text/html',
    '.js':   'application/javascript',
    '.json': 'application/json',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.gif':  'image/gif',
    '.svg':  'image/svg+xml',
    '.ico':  'image/x-icon',
    '.woff': 'font/woff',
    '.woff2':'font/woff2',
    '.ttf':  'font/ttf',
    '.eot':  'application/vnd.ms-fontobject',
    '.mp3':  'audio/mpeg',
    '.ogg':  'audio/ogg',
    '.webm': 'video/webm',
    '.wav':  'audio/wav',
    '.atlas':'text/plain',
    '.xml':  'application/xml',
    '.vdf':  'text/plain',
};

const server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0];
    if (urlPath === '/') urlPath = '/index.html';
    const filePath = path.join(ROOT, urlPath);

    fs.stat(filePath, (err, stat) => {
        if (err || !stat.isFile()) {
            res.writeHead(404);
            res.end('Not Found: ' + urlPath);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME[ext] || 'application/octet-stream';

        // Performance headers
        res.setHeader('Content-Type', mime);
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
        res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        res.setHeader('Cache-Control', 'public, max-age=31536000');

        // Stream file
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    });
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`\n  V-Native Server: http://localhost:${PORT}\n`);
    // Auto-open browser
    const { exec } = require('child_process');
    exec(`start chrome --enable-features=SharedArrayBuffer --enable-unsafe-webgpu --ignore-gpu-blocklist --enable-gpu-rasterization --enable-zero-copy http://localhost:${PORT}`);
});
