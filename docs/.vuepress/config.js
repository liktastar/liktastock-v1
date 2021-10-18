module.exports = {
  // Title of your website
  title: 'LIKTASTOCK',

  // Description of your website description: '気ままに語っていくブログです',

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  markdown: {
    linkify: true,
    breaks: true,
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: {
      // default pages title
      home: 'Home',
      posts: 'Posts',
      category: 'Category',
      categories: 'Categories',
      tag: 'Tag',
      tags: 'Tags',

      // post filter
      allCategories: 'All',
      search: 'Search',
      searchHint: 'Search in title and excerpt',
      noRelatedPosts: 'No related posts',

      // post meta
      top: 'Top',
      createdAt: 'Created',
      updatedAt: 'Updated',
      prevPost: '古い記事',
      nextPost: '新しい記事',

      // post nav
      toc: 'Table of Contents',
      comments: 'Comments',

      // hints
      notFound: 'ページが存在しません',
    },

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'liktastar',

      // Introduction of yourself (HTML supported)
      description: 'Switchゲーマー<br><a href="/introduction">自己紹介記事</a>',

      // Your avatar image
      // Set to external link
      avatar: '/assets/img/profile_icon.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Twitter account and link
        twitter: {
          account: 'liktastar',
          link: 'https://twitter.com/liktastar',
        },
        // Github account and link
        github: {
          account: 'liktastar',
          link: 'https://github.com/liktastar',
        },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        // url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      // custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        // url: '/assets/img/profile_bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'YouTube', link: '/youtube/', exact: false },
    ],

    // Enable smooth scrolling or not
    smoothScroll: true,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // Comments config. See the [Posts Comments] section below.
    comments: false,

    // Pagination config (Optional)
    pagination: {
      perPage: 10,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: false,
      // Allow theme to add Posts page (url: /posts/)
      posts: false,
    },
  },
}
