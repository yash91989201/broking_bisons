/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.investopedia.com",
			},
		],
	},
};

export default nextConfig;
