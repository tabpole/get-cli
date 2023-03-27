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
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'About', link: 'https://tabpole.github.io' },
        { text: 'Support', link: 'https://www.buymeacoffee.com/alpondith'},
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/jonataslaw/get_cli' },
      ],

      sidebar: [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Overview', link: 'getting_started/overview.md' },
            { text: 'Install', link: 'getting_started/install.md' },
            // { text: 'Uninstall', link: 'getting_started/uninstall.md' },
          ],
        },
        {
          text: 'Commands',
          collapsed: false,
          items: [
            { text: 'Project', link: 'commands/project.md' },
            { text: 'Model', link: 'commands/model.md' },
            { text: 'View', link: 'commands/view.md' },
            { text: 'Controller', link: 'commands/controller.md' },
            { text: 'Page', link: 'commands/page.md' },
            { text: 'Screen', link: 'commands/screen.md' },
            { text: 'Locale', link: 'commands/locale.md' },
          ],
        },
        {
          text: 'Package Management',
          collapsed: false,
          items: [
            { text: 'Install', link: 'package_management/install.md' },
            { text: 'Remove', link: 'package_management/remove.md' },
          ],
        },
        // {
        //   text: 'Examples',
        //   collapsed: true,
        //   items: [
        //     {  text: 'Page', link: 'examples/page.md'},
        //   ],
        // },
        // {
        //   text: 'Resources',
        //   collapsed: true,
        //   items: [
        //     { text: 'Playlists', link: 'resources/playlist.md' },
        //     { text: 'Tools', link: 'resources/tool.md' },
        //   ],
        // },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 @tabpole'
      }
    },
  }