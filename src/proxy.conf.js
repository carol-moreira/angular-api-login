const PROXY_CONFIG = [
    {
        context: [
            '/api/User/Login',
        ],
        target: "https://freeapi.gerasim.in",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG;

// array com objeto dentro para exportar algumas instruções