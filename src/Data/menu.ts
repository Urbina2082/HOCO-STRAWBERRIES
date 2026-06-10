type Menu = {
  id: string;
  name: string;
  description: string;
  grups: {
    id: number;
    title: string;
    items: {
      name: string;
      datails: string;
      price: String;
    }[];
  }[];
};

export const menu: Menu[] = [
  {
    id: "Smoothies-&-Aguas",
    name: "Smoothies & Aguas",
    description: "Smoothies $65 | Aguas $55",
    grups: [
      {
        id: 1,
        title: "Smoothies",
        items: [
          {
            name: "Oreo",
            datails: "Leche, oreo, vainilla, chispas, chocomilk y hershey.",
            price: "$65",
          },
          {
            name: "PicaFresa",
            datails: "Agua, fresas, pica fresa, chamoy y tico.",
            price: "$65",
          },
          {
            name: "Mangonada",
            datails: "Agua, mango, chamoy, tico y tajín.",
            price: "$65",
          },
          {
            name: "ManFresh",
            datails: "Leche, mango, fresas y azúcar.",
            price: "$65",
          },
          {
            name: "RedSummer",
            datails: "Yogurth, frutos rojos y azúcar.",
            price: "$65",
          },
          {
            name: "Chocobanana",
            datails: "Leche, plátano, chocomilk y hershey.",
            price: "$65",
          },
          {
            name: "Berry Paradais",
            datails: "Leche, fresas, plátano y azúcar.",
            price: "$65",
          },
          {
            name: "Straw",
            datails: "Fresa, leche y azúcar.",
            price: "$65",
          },
          {
            name: "Gansito",
            datails: "Gansito, leche, jarabe de fresa y chocomilk.",
            price: "$65",
          },
        ],
      },
      {
        id: 2,
        title: "Aguas",
        items: [
          {
            name: "Limonada",
            datails: "Agua, limón y azúcar.",
            price: "$55",
          },
          {
            name: "Pepinada",
            datails: "Agua, pepino, limón y azúcar.",
            price: "$55",
          },
          {
            name: "Mango",
            datails: "Agua, mango y azúcar.",
            price: "$55",
          },
          {
            name: "Fresada",
            datails: "Agua, fresa y azúcar.",
            price: "$55",
          },
        ],
      },
    ],
  },
  {
    id: "Fresas",
    name: "Fresas",
    description: "Fresas con crema y toppings",
    grups: [
      {
        id: 1,
        title: "Fresas",
        items: [
          {
            name: "Fresas con Crema",
            datails: "Fresas con crema casera.",
            price: "CH $45 | M $70 | G $95 | L $195",
          },
          {
            name: "FresaChees",
            datails: "Fresas, crema y trozos de cheesecake.",
            price: "CH $65 | M $90 | G $115 | L $220",
          },
          {
            name: "FresaFlan",
            datails: "Fresas, crema y trozos de flan.",
            price: "CH $65 | M $90 | G $115 | L $220",
          },
          {
            name: "FresaBrow",
            datails: "Fresas, crema y trozos de brownie.",
            price: "CH $60 | M $85 | G $110 | L $215",
          },
          {
            name: "FresaChoco",
            datails: "Fresas con avellana.",
            price: "CH $65 | M $85 | G $110 | L $215",
          },
          {
            name: "Fresas Dubai",
            datails: "Fresas, crema, pistacho y avellana.",
            price: "CH $80 | M $110 | G $160",
          },
        ],
      },
      {
        id: 2,
        title: "Toppings",
        items: [
          {
            name: "Topping Extra",
            datails: "Nuez, lunetas, chispas, almendra, oreo, kranky, mango, granola, barquillo, crema batida y cereal.",
            price: "$8",
          },
          {
            name: "Jarabe Extra",
            datails: "Fresa, hershey, lechera y cajeta.",
            price: "$5",
          },
        ],
      },
      {
        id: 3,
        title: "Premium",
        items: [
          {
            name: "Avellana",
            datails: "Ingrediente premium extra.",
            price: "$10",
          },
          {
            name: "Nieve",
            datails: "Ingrediente premium extra.",
            price: "$10",
          },
          {
            name: "Cheesecake",
            datails: "Ingrediente premium extra.",
            price: "$25",
          },
          {
            name: "Flan",
            datails: "Ingrediente premium extra.",
            price: "$20",
          },
          {
            name: "Brownie",
            datails: "Ingrediente premium extra.",
            price: "$15",
          },
        ],
      },
    ],
  },
  {
    id: "Crepas",
    name: "Crepas",
    description: "Crepas dulces y saladas",
    grups: [
      {
        id: 1,
        title: "Dulces",
        items: [
          {
            name: "Choco",
            datails: "Avellana.",
            price: "$60",
          },
          {
            name: "Oreo",
            datails: "Oreo, Philadelphia, avellana, lechera y crema batida.",
            price: "$75",
          },
          {
            name: "Kinder",
            datails: "Philadelphia, avellana, fresa, kinder y jarabe lechera.",
            price: "$85",
          },
          {
            name: "FresMan",
            datails: "Avellana, fresa, mango y jarabe lechera.",
            price: "$75",
          },
          {
            name: "FresaMIX",
            datails: "Fresas, plátano, avellana y jarabe lechera.",
            price: "$75",
          },
          {
            name: "Bubulubu",
            datails: "Bubulubu, avellana, jarabe de fresa y fresas.",
            price: "$85",
          },
        ],
      },
      {
        id: 2,
        title: "Saladas",
        items: [
          {
            name: "Peperoni",
            datails: "Peperoni, salsa tomate, 2 quesos y ranch.",
            price: "$85",
          },
          {
            name: "Hawaiana",
            datails: "2 quesos, piña, jamón, salsa tomate y ranch.",
            price: "$85",
          },
        ],
      },
    ],
  },
  {
    id: "K-Mex-Menu",
    name: "K-Méx Menu",
    description: "Snacks coreanos y bebidas",
    grups: [
      {
        id: 1,
        title: "Especialidades",
        items: [
          {
            name: "RamenElote",
            datails: "Buldak con elote y chettos a elegir.",
            price: "$150",
          },
          {
            name: "MaruchaElote",
            datails: "Maruchan con elote y chettos a elegir.",
            price: "$100",
          },
        ],
      },
      {
        id: 2,
        title: "Tteokbokki House",
        items: [
          {
            name: "Rapokki Hot & Spicy",
            datails: "Rapokki picante.",
            price: "$85",
          },
          {
            name: "Rapokki Sweet & Spicy",
            datails: "Rapokki dulce y picante.",
            price: "$85",
          },
          {
            name: "Rapokki Cheese",
            datails: "Rapokki con queso.",
            price: "$85",
          },
          {
            name: "Rapokki Kimchi",
            datails: "Rapokki con kimchi.",
            price: "$85",
          },
          {
            name: "Tteokbokki Sweet & Spicy",
            datails: "Tteokbokki dulce y picante.",
            price: "$70",
          },
          {
            name: "Tteokbokki Kimchi",
            datails: "Tteokbokki con kimchi.",
            price: "$70",
          },
          {
            name: "Tteokbokki Carbonara",
            datails: "Tteokbokki carbonara. Agrega queso mozzarella por $15.",
            price: "$130",
          },
        ],
      },
      {
        id: 3,
        title: "K-Ice Drinks",
        items: [
          {
            name: "Watermelon K-Ice",
            datails: "Bebida coreana sabor sandía.",
            price: "$60",
          },
          {
            name: "Apple K-Ice",
            datails: "Bebida coreana sabor manzana.",
            price: "$60",
          },
          {
            name: "K-Berry Ice",
            datails: "Bebida coreana sabor frutos rojos.",
            price: "$60",
          },
        ],
      },
    ],
  },
];