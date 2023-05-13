module.exports = {
    //link img setup
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
        },
      ],
    },
    //redirects *404*
    // async redirects() {
    //   return [
    //     {
    //       source: "/:path*",
    //       destination: "/404",
    //       permanent: false,
    //     },
    //   ];
    // },
  }