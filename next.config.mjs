import ElasticNode from 'elastic-apm-node'
if (typeof process.env.ELA_APM_PLC !== "undefined") ElasticNode.start()
/** @type {import('next').NextConfig} */
// import { programAssesmentCheck } from '@strix/server'

// programAssesmentCheck('next')

const image_origins = process.env.IMAGE_ORIGINS?.split(',') ?? []
let remote_patterns = []
if (image_origins) {
    image_origins.map((item, _) => {
        remote_patterns.push({
            protocol: 'https',
            hostname: item,
            port: '',
            pathname: '**',
        })
    })
}

const nextConfig = {
    basePath: (process.env.SUBDIR ?? "").length > 0 ? process.env.SUBDIR : undefined,
    assetPrefix: (process.env.SUBDIR ?? "").length > 0 ? process.env.SUBDIR : undefined,
    reactStrictMode: process.env.ENVIRONMENT_LEVEL > 1 ? true : false,
    poweredByHeader: false,
    productionBrowserSourceMaps: false,
    images: {
        remotePatterns: remote_patterns,
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `/ppid/:path*`,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Allow',
                        value: 'GET, POST',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'no-referrer',
                    },
                    {
                        key: 'Cross-Origin-Embedder-Policy',
                        value: 'require-corp',
                    },
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin',
                    },
                ],
            },
        ]
    },
}

export default nextConfig
