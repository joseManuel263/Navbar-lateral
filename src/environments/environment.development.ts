export const environment = {
  production: true,

  // Información de la app
  companyName: 'Gifs',
  companyName2: 'App',
  companySlogan: 'Maneja tus gifs',

  // Información del dashboard
  dashboardTitle: 'Dash',
  dashboardHighlight: '8',
  dashboardSubtitle: 'Manage your actions and activities',

  // Información del perfil
  profileWelcome: 'Welcome back,',
  profileUserName: 'Edward Tompson',
  profileUserImage:
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80',

  // Landing page
  landingPage: {
    title: 'Explora el Mundo de los GIFs',
    description: `Descubre una experiencia visual única con nuestra aplicación desarrollada en Angular 19.
      Explora miles de GIFs en tendencia, busca tus animaciones favoritas
      y sumérgete en el contenido más popular de la web, todo impulsado por la API oficial de Giphy.`,
    gifImage: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
    features: [
      {
        iconColor: 'bg-blue-600',
        title: 'Tendencias en Vivo',
        description:
          'Mantente al día con los GIFs más populares y virales del momento. Contenido actualizado en tiempo real directo desde Giphy.'
      },
      {
        iconColor: 'bg-green-600',
        title: 'Búsqueda Inteligente',
        description:
          'Encuentra exactamente lo que buscas. Explora millones de GIFs por categorías, palabras clave o temas específicos.'
      }
    ],
    footerText: 'Desarrollado con dedicación usando tecnologías modernas',
    footerTechs: ['Angular 19', 'Tailwind CSS', 'Giphy API'],
    giphyDocs: 'https://developers.giphy.com/'
  },

  // Menú lateral (Side Menu)
  sideMenu: [
    {
      icon: 'fa-solid fa-house',
      title: 'Dashboard',
      subtitle: 'Main page overview',
      router: '/dashboard/home'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Trending',
      subtitle: 'The best gifs',
      router: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Search',
      subtitle: 'Find your favorite gifs',
      router: '/dashboard/search'
    }
  ],

  // API
  giphyApiKey: 'JecLl0Pc5P9OYdMjWvtzDPKusnFCzfUa',
  giphyUrl: 'https://api.giphy.com/v1/gifs'
};
