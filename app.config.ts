// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'My Notes',
    description: 'The best place to start your documentation.',
    image: 'public/cover.png',
    url: 'https://prakhar.pro',
    aside: {
      level: 0,
      collapsed: true,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {text: 'Made by Prakhar Saxena', icon: 'IconDocus', href: 'https://prakhar.pro'},
      fluid: true
    },
  }
})
