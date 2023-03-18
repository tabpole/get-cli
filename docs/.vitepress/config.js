export default {
    title: 'Get CLI',
    description: 'Get Cli',
    base : '/get-cli/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    themeConfig: {
      siteTitle: 'Get CLI',
      logo : '/logo.png',

      // algolia: {
      //   appId: '9O9QAU72UI',
      //   apiKey: '03fb7c8b14ef1a61c79b3ae737f2f4e0',
      //   indexName: 'ker'
      // },

      editLink: {
        pattern: 'https://github.com/tabpole/get-cli/tree/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'Support', link: 'https://www.buymeacoffee.com/alpondith'},
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/jonataslaw/get_cli' },
      ],

      sidebar: [
        {
          text: 'Getting Started',
          // collapsed: false,
          items: [
            { text: 'Overview', link: 'getting_started/overview.md' },
            { text: 'Install on Linux', link: 'getting_started/install_on_linux.md' },
            { text: 'Remove from Linux', link: 'getting_started/uninstall_from_linux.md' },
          ],
        },
        {
          text: 'Concepts',
          // collapsed: false,
          items: [
            { text: 'CLI', link: 'concepts/cli.md' },
          ],
        },
        {
          text: 'Examples',
          // collapsed: false,
          items: [
            {  text: 'Page', link: 'examples/page.md'},
          ],
        },
        {
          text: 'Resources',
          // collapsed: false,
          items: [
            { text: 'Playlists', link: 'resources/playlist.md' },
            { text: 'Tools', link: 'resources/tool.md' },
          ],
        },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 @tabpole'
      }
    },
  }