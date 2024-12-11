export default {
    server: {
      proxy: {
        '/api': {
          target: 'https://istp1service.azurewebsites.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  