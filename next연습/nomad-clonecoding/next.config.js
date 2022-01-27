const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
// redirect
// source : 유저가 이동하려고 하는 위치
// destination: 우리가 유저를 보낼 위치
// permanent : 브라우저나 검색엔진이 이 정보를 기억하는지의 여부 설정
// source의 :path 자리에 어떤 걸 넣어도 destination의 :path 자리에 똑같이 적용됨
// path뒤에 *을 붙이면 /sdf/sdf/sdff 이런식으로 계속 해도 destination에 똑같이 적용됨
