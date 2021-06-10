const menu = [
  {
    category: "soupe",
    items: [
      {
        dish: "Soupe PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
  {
    category: "pizza",
    items: [
      {
        dish: "PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
  {
    category: "pasta",
    items: [
      {
        dish: "pasta PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
  {
    category: "desert",
    items: [
      {
        dish: "desert PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
  {
    category: "wine",
    items: [
      {
        dish: "wine PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
  {
    category: "beer",
    items: [
      {
        dish: "beer PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
  {
    category: "drinks",
    items: [
      {
        dish: "drinks PIZZA QUATRO STAGIONI lorem ipsum dolor sit amet",
        price: "55,68",
        description: "Integer ullamcorper neque eu purus euismod",
      },
    ],
  },
];

for(let i = 0; i < menu.length; i++) {
  const item = menu[i].items[0];
  for(let j = 0; j < 20; j ++) {
    menu[i].items.push(item);
  }
}

export default menu;
