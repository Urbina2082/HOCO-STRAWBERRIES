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
      price: string;
    }[];
  }[];
};

export const menu: Menu[] = [
  {
    id: "Bebidas",
    name: "Bebidas",
    description: "Frappes $80 | Smoothies $70 | Aguas $55",
    grups: [
      {
        id: 1,
        title: "Frappes",
        items: [
          { name: "Oreo", datails: "Frappe sabor oreo.", price: "$80" },
          { name: "Fresa", datails: "Frappe sabor fresa.", price: "$80" },
          { name: "Gansito", datails: "Frappe sabor gansito.", price: "$80" },
          { name: "Pinguino", datails: "Frappe sabor pingüino.", price: "$80" },
          { name: "Ferrero", datails: "Frappe sabor ferrero.", price: "$80" },
        ],
      },
      {
        id: 2,
        title: "Smoothies",
        items: [
          { name: "Mangonada", datails: "Agua, mango, chamoy, tico y tajín.", price: "$70" },
          { name: "PicaFresa", datails: "Agua, fresas, pica fresa, chamoy y tico.", price: "$70" },
          { name: "StrawberryMilk", datails: "Fresa, leche y azúcar.", price: "$70" },
          { name: "Berry Paradais", datails: "Leche, fresas, plátano y azúcar.", price: "$70" },
          { name: "RedSummer", datails: "Yogurth, frutos rojos y azúcar.", price: "$70" },
          { name: "Chocobanana", datails: "Leche, plátano, chocomilk y hershey.", price: "$70" },
          { name: "ManFresh", datails: "Leche, mango, fresas y azúcar.", price: "$70" },
        ],
      },
      {
        id: 3,
        title: "Aguas",
        items: [
          { name: "Embotellada", datails: "Agua natural embotellada.", price: "$10" },
          { name: "Fresada", datails: "Agua, fresa y azúcar.", price: "$55" },
          { name: "Mango", datails: "Agua, mango y azúcar.", price: "$55" },
          { name: "Pepinada", datails: "Agua, pepino, limón y azúcar.", price: "$55" },
          { name: "Limonada", datails: "Agua, limón y azúcar.", price: "$55" },
        ],
      },
      {
        id: 4,
        title: "Extras",
        items: [
          { name: "Coca Cola 600ml", datails: "Refresco.", price: "$25" },
          { name: "Starbucks", datails: "Bebida Starbucks.", price: "$50" },
          { name: "Vaso de hielo", datails: "Vaso extra con hielo.", price: "$10" },
        ],
      },
    ],
  },
  {
    id: "Fresas",
    name: "Vaso Fresero",
    description: "Fresas con crema y toppings",
    grups: [
      {
        id: 1,
        title: "Fresas",
        items: [
          {
            name: "Fresas con Crema Tradicionales",
            datails: "Fresas con crema casera.",
            price: "CH $50 | M $75 | G $100 | L $200",
          },
          {
            name: "FresaChoco",
            datails: "Fresas con avellana.",
            price: "CH $65 | M $85 | G $115 | L $220",
          },
          {
            name: "FresaChees",
            datails: "Fresas, crema y trozos de cheesecake.",
            price: "CH $70 | M $90 | G $120 | L $230",
          },
          {
            name: "FresaFlan",
            datails: "Fresas, crema y trozos de flan.",
            price: "CH $70 | M $90 | G $120 | L $230",
          },
          {
            name: "FresaBrow",
            datails: "Fresas, crema y trozos de brownie.",
            price: "CH $70 | M $90 | G $120 | L $230",
          },
          {
            name: "Fresas Raffaello, Lotus y Ferrero",
            datails: "Especialidad con galletas y chocolates.",
            price: "CH $75 | M $110 | G $140 | L $280",
          },
          {
            name: "Fresas Dubái",
            datails: "Fresas, crema, pistacho y avellana.",
            price: "CH $80 | M $120 | G $170 | L $330",
          },
        ],
      },
      {
        id: 2,
        title: "Toppings y Jarabes",
        items: [
          {
            name: "Toppings Extras",
            datails: "Nuez, Lunetas, Chispas, Almendra, Oreo, Kranky, Mango, Granola, Crema batida.",
            price: "$10",
          },
          {
            name: "Jarabe Extra",
            datails: "Lechera, Cajeta, Fresa, Chocolate.",
            price: "$5",
          },
        ],
      },
      {
        id: 3,
        title: "Topping Premium",
        items: [
          { name: "Nieve", datails: "Bola de nieve extra.", price: "$15" },
          { name: "Cheescake, flan o brownie", datails: "Rebanada extra.", price: "$25" },
          { name: "Bubulubu", datails: "Chocolate extra.", price: "$20" },
          { name: "Kinder", datails: "Chocolate premium extra.", price: "$30" },
          { name: "Gansito, pingüino", datails: "Pastelito extra.", price: "$12" },
          { name: "Magnum", datails: "Paleta extra.", price: "$30" },
        ],
      },
    ],
  },
  {
    id: "Crepas",
    name: "Crepas",
    description: "Crepas dulces, saladas y arma tu crepa",
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
            datails: "Oreo, Philadelphia, avellana, lechera.",
            price: "$80",
          },
          {
            name: "Kinder",
            datails: "Philadelphia, avellana, fresa, kinder.",
            price: "$90",
          },
          {
            name: "Bubulubu",
            datails: "Avellana, fresas, bubulubu.",
            price: "$85",
          },
          {
            name: "FresaMix",
            datails: "Fresa, plátano, avellana.",
            price: "$75",
          },
          {
            name: "FresaMan",
            datails: "Fresa, mango, lechera.",
            price: "$75",
          },
        ],
      },
      {
        id: 2,
        title: "Saladas",
        items: [
          {
            name: "Peperoni",
            datails: "Salsa tomate, peperoni, 2 quesos.",
            price: "$85",
          },
          {
            name: "Hawaiana",
            datails: "Salsa tomate, piña, 2 quesos.",
            price: "$85",
          },
        ],
      },
      {
        id: 3,
        title: "Arma Tu Crepa",
        items: [
          {
            name: "Clásica",
            datails: "1 ingrediente a elegir (Incluye 1 jarabe).",
            price: "$60",
          },
          {
            name: "Especial",
            datails: "2 ingredientes a elegir (Incluye 1 jarabe).",
            price: "$75",
          },
          {
            name: "Premium",
            datails: "4 ingredientes a elegir (Incluye 1 jarabe).",
            price: "$90",
          },
          {
            name: "Ingrediente Extra",
            datails: "Añade un ingrediente adicional a tu crepa.",
            price: "$15",
          },
        ],
      },
    ],
  },
  {
    id: "The-Full-Mix",
    name: "The Full Mix",
    description: "Deli Fresh & Hocombos",
    grups: [
      {
        id: 1,
        title: "Deli Fresh",
        items: [
          { name: "Sandwich", datails: "Sándwich preparado fresco.", price: "$55" },
          { name: "Ensalada grande", datails: "Ensalada fresca con aderezos.", price: "$110" },
        ],
      },
      {
        id: 2,
        title: "Hocombos",
        items: [
          { name: "K-Combo", datails: "Sandwich + smothie.", price: "$110" },
          { name: "Combo Crepe", datails: "Crepa Clasica + Smothie.", price: "$115" },
          { name: "Combo Lunes", datails: "2 Fresas M (flan, brownie, cheescake).", price: "$165" },
          { name: "Combo Miércoles", datails: "1 Fresas M (Ferrero, lotus, rafaello) + 1 Frappe a elegir.", price: "$175" },
        ],
      },
    ],
  },
  {
    id: "Korea-Menu",
    name: "Korea Menú",
    description: "K-Food, Snacks y Bebidas Coreanas",
    grups: [
      {
        id: 1,
        title: "K-Food",
        items: [
          {
            name: "RamenElote",
            datails: "Buldak + elote preparado + frituras a elegir.",
            price: "$150",
          },
          {
            name: "MaruchaElote",
            datails: "Maruchan + elote preparado + frituras a elegir.",
            price: "$100",
          },
          {
            name: "Ramen + Mozarella",
            datails: "Ramen coreano con queso mozarella.",
            price: "$70",
          },
          {
            name: "Ramen",
            datails: "Ramen coreano tradicional.",
            price: "$55",
          },
          {
            name: "Maruchan",
            datails: "Sopa Maruchan clásica.",
            price: "$25",
          },
          {
            name: "Tteokbokki buldak",
            datails: "Tteokbokki con salsa buldak.",
            price: "$130",
          },
          {
            name: "Yopokki",
            datails: "Snack coreano Yopokki.",
            price: "$75",
          },
          {
            name: "Rapokki",
            datails: "Snack coreano Rapokki.",
            price: "$85",
          },
        ],
      },
      {
        id: 2,
        title: "CheeseSnack",
        items: [
          {
            name: "Fritos + queso",
            datails: "Frituras bañadas en queso.",
            price: "$50",
          },
          {
            name: "Fritos + queso + elote",
            datails: "Frituras bañadas en queso con elote.",
            price: "$60",
          },
        ],
      },
      {
        id: 3,
        title: "Korea Iced",
        items: [
          {
            name: "Korea Iced (Bebida coreana + vaso hielo)",
            datails: "Sabores: Uva verde, Fresa, Blueberry, Sandía, Piña, Manzana, Durazno, Limon.",
            price: "$60",
          },
        ],
      },
      {
        id: 4,
        title: "Extras",
        items: [
          { name: "Queso mozarella", datails: "Queso extra.", price: "$15" },
          { name: "Vaso con hielo", datails: "Hielo extra.", price: "$10" },
        ],
      },
    ],
  },
];