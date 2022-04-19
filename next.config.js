/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI:
      "mongodb+srv://edychan:drygin@cluster0.zmqur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
