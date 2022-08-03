const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '88c5ad34931348ca3814531e7d8e374a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;