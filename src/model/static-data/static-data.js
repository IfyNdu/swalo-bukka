export default {

  about_us: [{
    header: 'OPENING HOURS',
    id: 'opening_hours',
    paragraphs: [
      'MON – SUN',
      '11.30AM – 2.30PM',
      '5.30PM – 10PM'
    ],
    width: '100%'
  }, {
    header: 'VISIT US',
    id: 'visit_us',
    paragraphs: [
      '112 Oladipo Diya Road',
      'Opposite Ocean Centre',
      '900104 Abuja',
      'Nigeria'
    ],
    width: '100%'
  }, {
    header: 'CALL US',
    id: 'call_us',
    paragraphs: [
      '+234 818 107 8580',
      '+234 806 396 8664'
    ],
    width: '100%'
  }, {
    actions: [{
      key: 'facebook',
      title: 'FACEBOOK',
      url: 'https://www.facebook.com/swalobukka/'
    }, {
      key: 'twitter',
      title: 'TWITTER',
      url: 'https://www.instagram.com/swalobukka/'
    }, {
      key: 'instagram',
      title: 'INSTAGRAM',
      url: 'https://www.instagram.com/swalobukka/'
    }],
    header: 'STAY IN TOUCH',
    width: '100%'
  }],
  contact_us: [
    {
      input: 'input',
      key: 'name',
      name: 'name',
      placeholder: 'Name',
      type: 'text'
    },
    {
      input: 'input',
      key: 'email',
      name: 'email',
      placeholder: 'Email',
      type: 'email'
    },
    {
      input: 'input',
      key: 'tel',
      name: 'tel',
      placeholder: 'Telephone',
      type: 'tel'
    },
    {
      input: 'textarea',
      key: 'message',
      name: 'message',
      placeholder: 'Message',
      type: 'textarea'
    }
  ],
  hamburger_floater: {
    bounds: {
      bottom: '1rem',
      height: '200px',
      left: '1rem',
      width: '100px'
    }
  },

  hero: {

    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  logo_floater: {
    bounds: {
      height: '200px',
      left: '1rem',
      top: '1rem',
      width: '100px'
    },
    url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/logo.jpeg'
  },
  map: {
    height: '300px',
    initialCenter: {
      lat: 9.00417,
      lng: 7.46609
    },
    zoom: 16
  },
  section1: {
    articles: [
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/asian-chopsticks-cuisine-670702.jpg' },
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/bread-breakfast-burger-1108117.jpg' },
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/bread-breakfast-delicious-704569.jpg' },
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/cook-crush-grind-51384.jpg' },
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/cooking-food-ginger-256318.jpg' }
    ],
    header: 'Functions',
    padding: '2rem',
    paddingEdge: 'paddingTop',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  section2: {
    articles: [
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/cuisine-delicious-food-784634.jpg' },
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/food-food-photography-meal-769290.jpg' },
      { url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/carousel/pexels-photo-670702.jpeg' }
    ],
    padding: '2rem',
    paddingEdge: 'paddingBottom',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Ornare arcu odio ut sem nulla pharetra diam sit. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Odio eu feugiat pretium nibh ipsum consequat nisl. Pharetra pharetra massa massa ultricies mi quis. Placerat orci nulla pellentesque dignissim. Dui faucibus in ornare quam viverra orci.',
      'Vitae et leo duis ut diam quam nulla porttitor massa. Consequat nisl vel pretium lectus quam. Suscipit adipiscing bibendum est ultricies integer. Elementum integer enim neque volutpat ac tincidunt vitae. Senectus et netus et malesuada fames ac turpis egestas integer. Nec nam aliquam sem et tortor consequat id. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.'
    ],
  },
  title: 'SWALO BUKKA'
};
