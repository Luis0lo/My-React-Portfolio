const projects = [
  {
    id: 1,
    title: 'OnePlace',
    subTitle: 'React/Express.js Full-stack app',
    githubUrl: 'https://github.com/Luis0lo',
    websiteUrl: 'https://agitated-northcutt-ed9a89.netlify.app/',
    description: [
      { id: 0, paragraph: 'In a team of 4 we had a week to build this app.' },
      {
        id: 1,
        paragraph:
          'Adopting an Agile methodology was crucial, as was continuous integration of new features in our main branch',
      },
      {
        id: 2,
        paragraph:
          'Component tree, User Stories, Deployment, Testing, Databases, CRUD, Postman, Retrospectives...',
      },
    ],
    imageUrl: '/images/onePlace.jpg',
    imageAlt: 'One place',
  },
  {
    id: 2,
    title: 'Hold',
    subTitle: 'made over Christmas break 🎄',
    githubUrl: 'https://github.com/Luis0lo/Hold',
    websiteUrl: 'https://www.youtube.com/watch?v=47dsyLJsiXs',
    description: [
      { id: 0, paragraph: 'Was the right time to put into practice what I have learned at school Of code in no more than a month.' },
      {
        id: 1,
        paragraph:
          'I have created an investment quotes API (CRUD) and I am fetching an external one to obtain real exchange rates and shares prices.',
      },
      {
        id: 2,
        paragraph:
          "Proud! I managed to refactor and clean the main logic. I'm converting it into a React App.",
      },
    ],
    imageUrl: '/images/holdPic.jpg',
    imageAlt: 'Hold',
  },
  {
    id: 3,
    title: 'Portfolio',
    subTitle: 'prior to School of code',
    githubUrl: 'https://github.com/Luis0lo',
    websiteUrl: 'https://withluis.com/',
    description: [
      { id: 0, paragraph: 'This is the result of my self learning journey.' },
      {
        id: 1,
        paragraph:
          'In this portfolio, you can find several projects using a wide variety of tools.',
      },
      {
        id: 2,
        paragraph:
          'I started with HTML and end up at the point where I had to build a basic DB and deploy a 100% functional app.',
      },
    ],
    imageUrl: '/images/portfolioImg.jpg',
    imageAlt: 'Portfolio',
  },
];
export default projects;
