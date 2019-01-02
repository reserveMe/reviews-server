const reviews = [
  {
    review: {
      ratings: {
        overall: 4,
        food: 3,
        service: 1,
        ambience: 1,
        value: 2,
        noise_level: 'moderate',
      },
      tags: [
        'Seasonal',
        'Spicy',
        'People Watching',
        'Handcrafted Cocktails',
      ],
      id: 99,
      recommend_to_friend: false,
      text: 'Aliquid et ea maiores dolores voluptas dolorum nemo dolores. Necessitatibus deleniti magni fugit exercitationem nesciunt eum laudantium iste ipsa. Totam aut quasi rerum quidem id consequatur nam atque. Incidunt vitae aperiam quas dolor. Dolor perspiciatis fuga commodi aspernatur qui.',
      helpful_count: 0,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 99,
      nickname: 'OlinU',
      location: 'North Jordane',
      review_count: 4,
      date_dined: '2018-08-30T18:38:51.322Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 2,
        food: 5,
        service: 4,
        ambience: 3,
        value: 5,
        noise_level: 'moderate',
      },
      tags: [
        'Afternoon Tea',
      ],
      id: 265,
      recommend_to_friend: true,
      text: 'Sunt dicta fugiat in doloremque. Accusantium et ipsam aut voluptatem perferendis aliquid possimus perspiciatis rerum. Nihil dignissimos voluptatem qui. Aut saepe iste aut qui deserunt recusandae. Nihil beatae quis quae suscipit sunt dolor et dolores.',
      helpful_count: 3,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 265,
      nickname: 'MaidaS',
      location: 'Idellafort',
      review_count: 14,
      date_dined: '2016-01-12T08:38:21.784Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 2,
        food: 4,
        service: 2,
        ambience: 1,
        value: 3,
        noise_level: 'do not recall',
      },
      tags: [
        'Late-night Find',
      ],
      id: 382,
      recommend_to_friend: true,
      text: 'Officiis molestias quam hic. Sint possimus commodi ea aut dolorem. Quo sint vel voluptas commodi. Distinctio fugit vel.',
      helpful_count: 0,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 382,
      nickname: 'KennithB',
      location: 'New Violet',
      review_count: 26,
      date_dined: '2018-08-19T22:33:56.578Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 1,
        food: 3,
        service: 5,
        ambience: 1,
        value: 4,
        noise_level: 'quiet',
      },
      tags: [],
      id: 401,
      recommend_to_friend: false,
      text: 'Non omnis aut aut. Deserunt facere voluptatem reiciendis libero veritatis. Commodi ut autem.',
      helpful_count: 0,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 401,
      nickname: 'BertS',
      location: 'Port Benjamin',
      review_count: 18,
      date_dined: '2016-02-02T22:18:45.741Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 1,
        food: 3,
        service: 2,
        ambience: 5,
        value: 3,
        noise_level: 'energetic',
      },
      tags: [
        'Organic',
        'Neighborhood Gem',
        'Great for Outdoor Dining',
        'Waterfront',
      ],
      id: 419,
      recommend_to_friend: false,
      text: 'Omnis enim neque voluptas enim a distinctio quisquam eligendi. Quis aliquid repudiandae quisquam maiores vel sit distinctio nemo suscipit. Fugiat consequatur ad ab assumenda voluptatem.',
      helpful_count: 2,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 419,
      nickname: 'CasimerD',
      location: 'West Katherine',
      review_count: 14,
      date_dined: '2016-06-05T21:09:08.475Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 3,
        food: 1,
        service: 3,
        ambience: 4,
        value: 4,
        noise_level: 'do not recall',
      },
      tags: [
        'Business Meals',
        'Live Music',
        'Spicy',
        'Quiet Conversation',
      ],
      id: 426,
      recommend_to_friend: false,
      text: 'Dolore ullam nihil. Dolorum quae odit velit veritatis et et sed harum qui. Sequi similique quaerat consectetur reprehenderit quia quidem totam.',
      helpful_count: 1,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 426,
      nickname: 'CecilB',
      location: 'East Marielachester',
      review_count: 5,
      date_dined: '2018-05-25T08:12:04.582Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 4,
        food: 4,
        service: 2,
        ambience: 3,
        value: 3,
        noise_level: 'do not recall',
      },
      tags: [],
      id: 553,
      recommend_to_friend: true,
      text: 'Dolorem beatae aliquid. Deserunt quisquam tenetur praesentium. Soluta quod labore.',
      helpful_count: 3,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 553,
      nickname: 'BradS',
      location: 'West Keegan',
      review_count: 24,
      date_dined: '2017-05-28T01:54:16.166Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 4,
        food: 1,
        service: 1,
        ambience: 3,
        value: 2,
        noise_level: 'quiet',
      },
      tags: [],
      id: 682,
      recommend_to_friend: true,
      text: 'Aspernatur omnis deserunt aut qui voluptas. Molestiae rerum aliquid vero expedita sit. Tempora quisquam consequuntur sequi. Ad aut dolorem aliquam est dignissimos officiis.',
      helpful_count: 1,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 682,
      nickname: 'VidalR',
      location: 'Kautzerborough',
      review_count: 18,
      date_dined: '2016-06-11T17:43:08.683Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 1,
        food: 5,
        service: 2,
        ambience: 2,
        value: 3,
        noise_level: 'do not recall',
      },
      tags: [
        'Comfort Food',
        'Quiet Conversation',
        'Fit for Foodies',
        'Comfort Food',
        'Healthy',
      ],
      id: 843,
      recommend_to_friend: false,
      text: 'Nihil culpa porro sed sed modi soluta esse. Rem autem a quod. Quo eos nostrum non. Debitis commodi tempore at mollitia.',
      helpful_count: 0,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 843,
      nickname: 'PearlineF',
      location: 'Beckerhaven',
      review_count: 22,
      date_dined: '2018-01-14T16:21:49.276Z',
    },
  },
  {
    review: {
      ratings: {
        overall: 4,
        food: 2,
        service: 3,
        ambience: 1,
        value: 5,
        noise_level: 'do not recall',
      },
      tags: [
        'Good for Birthdays',
        'Organic',
        'Vegan',
        'Live Sports',
        'Good for Birthdays',
        'Great for Lunch',
      ],
      id: 846,
      recommend_to_friend: true,
      text: 'Culpa libero culpa qui aperiam cumque vitae quidem laborum aut. Ducimus neque vero at voluptate sunt voluptatem et autem quibusdam. Ullam consequatur ut et eaque. Sunt voluptas perferendis dolorem vitae odit possimus id mollitia aut. Aut consectetur reiciendis tempore commodi voluptatibus.',
      helpful_count: 2,
    },
    restaurant: {
      id: 25,
    },
    reviewer: {
      id: 846,
      nickname: 'KaleyW',
      location: 'South Kariane',
      review_count: 13,
      date_dined: '2018-06-28T22:07:28.736Z',
    },
  },
];

module.exports = { reviews };
