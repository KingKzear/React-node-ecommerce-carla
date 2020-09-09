export const CONSTANT = {
  NORMAL_VIEW_CONTAINER: 'NORMAL_VIEW_CONTAINER',
  PURE_VIEW_CONTAINER: 'PURE_VIEW_CONTAINER'
}

export const MENU = [
  {
    title: 'SHOP BY STYLE',
    href: '',
    children: [
      {
        title: 'SHOP ALL',
        href: '/search-result'
      },
      {
        title: 'NEW ARRIVALS',
        href: '/search-result'
      },
      {
        title: 'EARRINGS',
        href: '/search-result'
      },
      {
        title: 'BRACELETS',
        href: '/search-result'
      },
      {
        title: 'NECKLACES',
        href: '/search-result'
      },
      {
        title: 'RINGS',
        href: '/search-result'
      },
      {
        title: 'VISTUAL JEWELRY SEARCH',
        href: '/visual-filter'
      },
      {
        title: 'BUY WITH CONFIDENCE',
        href: '/search-result'
      },
      {
        title: 'FINAL SALE',
        href: '/search-result'
      }
    ]
  },
  {
    title: 'SHOP BY CATEGORY',
    href: '/digital-catalogs',
    children: []
  },
  {
    title: 'ABOUT US',
    href: '',
    children: [
      {
        title: 'SEE OUR PROCESS',
        href: '/process'
      },
      {
        title: 'MEET THE FAMILY',
        href: '/meet-family'
      },
      {
        title: 'MEET THE MAKERS',
        href: '/meet-our-makers'
      },
      {
        title: 'LEARN OUR HISTORY',
        href: '/history'
      }
    ]
  },
  {
    title: 'RETAIL PARNTERS',
    href: '',
    children: [
      // {
      //   title: 'BOOK MY JCK APPT.',
      //   href: ''
      // },
      {
        title: 'FIND A STORE NEAR YOU',
        href: '/store'
      },
      {
        title: 'RETAIL PARTNERS HOME PAGE',
        href: '/'
      },
      {
        title: 'DISPLAY OPTIONS',
        href: '/choose-your-display'
      }
    ]
  }
]

export const QUICK_LINKS = [
  {
    title: 'New Arraivals',
    href: ''
  },
  {
    title: 'Top Performing Styles',
    href: ''
  },
  {
    title: 'Virtual Jewelry Search',
    href: ''
  },
  {
    title: 'Hoop Earrings',
    href: ''
  },
  {
    title: 'Drop Earrings',
    href: ''
  },
  {
    title: 'Stud Earrings',
    href: ''
  },
  {
    title: 'Necklaces',
    href: ''
  },
  {
    title: 'Rose Gold',
    href: ''
  },
  {
    title: 'Displays',
    href: ''
  },
]

export const ITEMS_PER_PAGES = [
  24, 48, 96, 'All'
]

export const VISUAL_FILTERS = [
  {
    category: 'earrings',
    url: 'https://lh3.googleusercontent.com/-xmD-uXUOIcE/Xf0J5LZNG0I/AAAAAAAAAa4/_FEdLA3X_GUhojJbtq-Cx_VtZ8wlVC6aACK8BGAsYHg/s0/2019-12-20.png',
    label: 'EARRINGS',
    subCategory: []
  },
  {
    category: 'necklaces',
    url: 'https://c.zmags.com/assets/images/5bc60432faf7ea5a710b1770_300x300.png',
    label: 'PENDANTS / NECKLACE',
    subCategory: [
      {
        category: 'necklaces',
        url: 'https://c.zmags.com/assets/images/5bc60432faf7ea5a710b1770_300x300.png',
        label: 'PENDANTS / NECKLACE',
      },
      {
        category: 'necklaces',
        url: 'https://c.zmags.com/assets/images/5bc60432faf7ea5a710b1770_300x300.png',
        label: 'PENDANTS / NECKLACE',
      }
    ]
  },
  {
    category: 'bracelets',
    url: 'https://c.zmags.com/assets/images/5bc60432cf2e0f7a9216f0de_300x300.png',
    label: 'BRACELETS',
    subCategory: []
  },
  {
    category: 'rings',
    url: 'https://c.zmags.com/assets/images/5bc60432cf2e0f7a9216f0df_300x300.png',
    label: 'RINGS',
    subCategory: []
  },
]

export const COLOR_TYPES = [
  {
    colorType: 'yellow',
    label: '14KT YELLOW',
    color: '#d6b44d'
  },
  {
    colorType: 'white',
    label: '14KT WHITE',
    color: '#ffffff'
  },
  {
    colorType: 'silver',
    label: 'STERLING SILVER',
    color: '#d6d6d6'
  },
  {
    colorType: 'two_tone',
    label: '14KT TWO-TONE',
    color: ''
  },
  {
    colorType: 'ss',
    label: '14KT & SS',
    color: ''
  },
]

export const PRODUCT_TYPES = [
  {
    type: 'semi_precious',
    url: 'https://c.zmags.com/assets/images/5bc63790cf2e0f7a921720d3_300x300.png',
    label: 'SEMI-PRECIOUS'
  },
  {
    type: 'precious',
    url: 'https://c.zmags.com/assets/images/5bc6378dfaf7ea5a710b489e_300x300.png',
    label: 'PRECIOUS'
  },
  {
    type: 'opal',
    url: 'https://c.zmags.com/assets/images/5bc63790cf2e0f7a921720d2_300x300.png',
    label: 'OPAL'
  },
  {
    type: 'pearl',
    url: 'https://c.zmags.com/assets/images/5bc6378ecf2e0f7a921720cd_300x300.png',
    label: 'PEARL'
  },
  {
    type: 'turquoise',
    url: 'https://c.zmags.com/assets/images/5bc6378ffaf7ea5a710b48ab_300x300.png',
    label: 'TURQUOISE'
  },
  {
    type: 'onyx',
    url: 'https://c.zmags.com/assets/images/5bc6378efaf7ea5a710b48a6_300x300.png',
    label: 'ONYX'
  },
  {
    type: 'no_stone',
    url: 'https://c.zmags.com/assets/images/5bc774d9cf2e0f7a9217db4d_300x300.png',
    label: 'NO STONE'
  }

]

export const PRODUCT_TYPE_DETAILS = [
  {
    detailType: 'amethyst',
    color: '#80346f',
    label: 'AMETHYST'
  },
  {
    detailType: 'blue_topaz',
    color: '#50c0ff',
    label: 'BLUE TOPAZ'
  },
  {
    detailType: 'aquamarine',
    color: '#bfdcff',
    label: 'AQUAMARINE'
  },
  {
    detailType: 'blue_chalcedony',
    color: '#8a95b5',
    label: 'BLUE CHALCEDONY'
  },
  {
    detailType: 'ca',
    color: '#a1c0cc',
    label: 'CZ'
  },
  {
    detailType: 'sky_blue_topaz',
    color: '#e3fbff',
    label: 'SKY BLUE TOPAZ'
  },
  {
    detailType: 'citrine',
    color: '#d6ca5e',
    label: 'CITRINE'
  },
  {
    detailType: 'citrine_maderia',
    color: '#bf5417',
    label: 'CITRINE MADERIA'
  },
  {
    detailType: 'garnet',
    color: '#5e0808',
    label: 'GARNET'
  },
  {
    detailType: 'green_tourmaline',
    color: '#20523f',
    label: 'GREEN TOURMALINE'
  },
  {
    detailType: 'iolite',
    color: '#2f4561',
    label: 'IIOLITE'
  },
  {
    detailType: 'oro_verde',
    color: '#deea92',
    label: 'ORO VERDE'
  },
  {
    detailType: 'peri_dot',
    color: '#a8d743',
    label: 'PERI DOT'
  },
  {
    detailType: 'pink_tourmaline',
    color: '#ed8edc',
    label: 'PINK TOURMALINE'
  },
  {
    detailType: 'mix',
    color: 'transparent',
    label: 'MIX'
  },
  {
    detailType: 'praseolite',
    color: '#abc4ae',
    label: 'PRASEOLITE'
  },
  {
    detailType: 'rhodolite',
    color: '#80224f',
    label: 'RHODOLITE'
  },
  {
    detailType: 'rose_de_france',
    color: '#ebcef2',
    label: 'ROSE DE FRANCE'
  },
  {
    detailType: 'rose_quartz',
    color: '#fceeff',
    label: 'ROSE QUARTZ'
  },
  {
    detailType: 'smokey_quartz',
    color: '#69553c',
    label: 'SMOKEY QUARTZ'
  }
]

export const DISTANCES = [10, 25, 50, 100, 250, 500]

export const AREA_RESULTS = [25, 50, 75, 100]