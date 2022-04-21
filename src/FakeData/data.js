export const carousels = [
  { image: "https://i.postimg.cc/4ND4ychv/CXNP9513-1200x300-110322.jpg" },
  {
    image: "https://i.postimg.cc/vHgHGhDH/L1-CXNP9522-1200-X300-12th-MAR22.jpg",
  },
  {
    image:
      "https://i.postimg.cc/5t1xqMg6/m-Brandtiles-Garnier-Men-300-250322.jpg",
  },
  {
    image:
      "https://i.postimg.cc/zfjqxP2p/m-Brandtiles-Parachute-300-250322.jpg",
  },
  { image: "https://i.postimg.cc/8zLp6Ch2/CXNP9519-1200x300-160322.jpg" },
  { image: "https://i.postimg.cc/wjDJhCLr/FMCG-NON-FOOD-BANNER-Feb-v2.jpg" },
];

export const categories = [
  {
    name: "Fruits and Vegetables",
    isActive: true,
    avatarImg:
      "https://i.postimg.cc/R014hCkg/u-https-anmj-org-au-wp-content-uploads-2019-05-Fruit-And-Vegetables-WEB.jpg",
    headerImg:
      "https://i.postimg.cc/QMW8SbVp/category-grocery-desktop-55e4a66309ac045b399fdb52a1a2bd0a8d0b2c31e7aa2305e167344709ca806d.jpg",
    categorySlug: "fruits-and-vegetables",
  },
  {
    name: "Food Grains, Oil and Masala",
    isActive: true,
    avatarImg:
      "https://i.postimg.cc/y8nL8mDW/u-https-www-highwayxpress-com-pub-media-catalog-category-food-and-oil.jpg",
    headerImg:
      "https://i.postimg.cc/3xWy22hT/category-bulk-desktop-bc82376429aab0129b39f823862ad0739b07f9455e8950f9f18d43999bd6cba4.jpg",
    categorySlug: "food-grains-oil-and-masala",
  },
  {
    name: "Bakery, Cakes and Dairy",
    isActive: true,
    avatarImg:
      "https://i.postimg.cc/hvD96jB6/u-https-ripe-london-wp-content-uploads-2020-07-dairyproduce.jpg",

    headerImg:
      "https://i.postimg.cc/J4DKKHMb/category-meals-desktop-c6c31978597c7a22e360b817f03a333c51c84e5d4ef09e24ea8b564ce5468554.png",
    categorySlug: "bakery-cakes-and-dairy",
  },
  {
    name: "Beverages",
    isActive: true,
    avatarImg:
      "https://i.postimg.cc/hP4r3C4v/Must-Have-Information-On-Soft-Drink-Labels.jpg",
    headerImg:
      "https://i.postimg.cc/QMW8SbVp/category-grocery-desktop-55e4a66309ac045b399fdb52a1a2bd0a8d0b2c31e7aa2305e167344709ca806d.jpg",
    categorySlug: "beverages",
  },
  {
    name: "Snacks and Branded Foods",
    isActive: true,
    avatarImg: "https://i.postimg.cc/sfMSBt2p/category-4-1597824662.jpg",
    headerImg:
      "https://i.postimg.cc/D0tkWVdH/category-convience-desktop-71dab4eed60f07ed3d65523d424d2b90b826ebbe05bd6d1c5978d6f599060971.jpg",
    categorySlug: "snacks-and-branded-foods",
  },
  {
    name: "Beauty and Hygeine",
    isActive: true,
    avatarImg: "https://i.postimg.cc/X73jMCtp/shutterstock-700270165.jpg",
    headerImg:
      "https://i.postimg.cc/QMW8SbVp/category-grocery-desktop-55e4a66309ac045b399fdb52a1a2bd0a8d0b2c31e7aa2305e167344709ca806d.jpg",
    categorySlug: "beauty-and-hygeine",
  },
  {
    name: "Cleaning and Household",
    isActive: true,
    avatarImg: "https://i.postimg.cc/DwXBqSyP/household-cleaning-products.jpg",
    headerImg:
      "https://i.postimg.cc/QMW8SbVp/category-grocery-desktop-55e4a66309ac045b399fdb52a1a2bd0a8d0b2c31e7aa2305e167344709ca806d.jpg",
    categorySlug: "cleaning-and-housing",
  },
  {
    name: "Kitchen Essentials",
    isActive: true,
    avatarImg:
      "https://i.postimg.cc/4406BX0L/10-Kitchen-Essentials-You-Need-To-Have.jpg",
    headerImg:
      "https://www.derekis.lt/images/Userfiles/product_category_banner_kitchen_accessories_1_7.jpg",
    categorySlug: "kitchen-essentials",
  },
];

export const subcategories = [
  {
    name: "Fruits",
    subcategorySlug: "fruits",
    isActive: true,
    belongsToCatSlug: "fruits-and-vegetables",
  },
  {
    name: "Vegetables",
    subcategorySlug: "vegetables",
    isActive: true,
    belongsToCatSlug: "fruits-and-vegetables",
  },
  {
    name: "Exotic Fruits and Vegetables",
    subcategorySlug: "exotic-fruits-and-vegetables",
    isActive: true,
    belongsToCatSlug: "fruits-and-vegetables",
  },
  {
    name: "Seasonal Fruits",
    subcategorySlug: "seasonal-fruits",
    isActive: true,
    belongsToCatSlug: "fruits-and-vegetables",
  },
  {
    name: "Chips and Namkeen",
    subcategorySlug: "chips-and-namkeen",
    isActive: true,
    belongsToCatSlug: "snacks-and-branded-foods",
  },
  {
    name: "Chocolates and Biscuits",
    subcategorySlug: "chocolates-and-biscuits",
    isActive: true,
    belongsToCatSlug: "snacks-and-branded-foods",
  },
];
//    isActive to show whether item is visible on site
//    isAvailable to show whether item is in stock
export const featuredCategories = [
  {
    homeCatHeader: "Bestsellers in Fruits",
    items: [
      {
        name: "Strawberries",
        variant: "500g",
        sellingPrice: 100,
        discountedSellingPrice: 80,
        discountPercent: 20,
        image:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bf81a90e-adbb-485e-bfcd-63fb4619a6a7.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "strawberries-500g",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: true,
        badge: null,
      },
      {
        name: "Iceberg Lettuce",
        variant: "250g",
        sellingPrice: 80,
        discountedSellingPrice: 40,
        discountPercent: 50,
        image:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3ea38082-38f8-41f8-a6fc-0c4ed481c040.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 2,
        slug: "iceberg-lettuce",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "vegetables",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Red Seedless grapes",
        variant: "300g",
        sellingPrice: 400,
        discountedSellingPrice: 300,
        discountPercent: 25,
        image:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4f1e62a9-3d61-4f5f-8f71-f51d61cf8cec.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "red-seedless-grapes",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Iceberg Lettuce",
        variant: "250g",
        sellingPrice: 80,
        discountedSellingPrice: 40,
        discountPercent: 50,
        image:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3ea38082-38f8-41f8-a6fc-0c4ed481c040.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 1,
        slug: "iceberg-lettuce",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "vegetables",
        inWishlist: true,
        badge: null,
      },
      {
        name: "Red Seedless grapes",
        variant: "300g",
        sellingPrice: 400,
        discountedSellingPrice: 300,
        discountPercent: 25,
        image:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4f1e62a9-3d61-4f5f-8f71-f51d61cf8cec.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "red-seedless-grapes",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Iceberg Lettuce",
        variant: "250g",
        sellingPrice: 80,
        discountedSellingPrice: 40,
        discountPercent: 50,
        image:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3ea38082-38f8-41f8-a6fc-0c4ed481c040.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 4,
        slug: "iceberg-lettuce",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "vegetables",
        inWishlist: false,
        badge: null,
      },
    ],
  },
  {
    homeCatHeader: "Popular in Snacks",
    items: [
      {
        name: "Haldiram Bhujia",
        variant: "1kg",
        sellingPrice: 120,
        discountedSellingPrice: 100,
        discountPercent: 17,
        image: "https://i.postimg.cc/wBHj8ss0/pro-52659.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "strawberries",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Munch",
        variant: "208g",
        sellingPrice: 150,
        discountedSellingPrice: 100,
        discountPercent: 33,
        image: "https://i.postimg.cc/LJjrTMfm/pro-127096.jpg",
        isActive: true,
        isAvailable: false,
        maxQuantityAllowed: 5,
        cartQuantity: 2,
        slug: "iceberg-lettuce",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "vegetables",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Dark Fantasy",
        variant: "300g",
        sellingPrice: 200,
        discountedSellingPrice: 180,
        discountPercent: 10,
        image: "https://i.postimg.cc/JtnCWvwQ/pro-313249.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "red-seedless-grapes",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Nutrichoice Biscuits",
        variant: "200g",
        sellingPrice: 120,
        discountedSellingPrice: 80,
        discountPercent: 34,
        image: "https://i.postimg.cc/Z9xzThKw/pro-392931.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 1,
        slug: "iceberg-lettuce",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "vegetables",
        inWishlist: true,
        badge: null,
      },
      {
        name: "Act Two Popcorn",
        variant: "450g",
        sellingPrice: 50,
        discountedSellingPrice: 40,
        discountPercent: 20,
        image: "https://i.postimg.cc/Q9YPtNLJ/pro-352110.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "red-seedless-grapes",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: false,
        badge: null,
      },
      {
        name: "Haldiram Bhujia",
        variant: "1kg",
        sellingPrice: 120,
        discountedSellingPrice: 100,
        discountPercent: 17,
        image: "https://i.postimg.cc/wBHj8ss0/pro-52659.jpg",
        isActive: true,
        isAvailable: true,
        maxQuantityAllowed: 5,
        cartQuantity: 0,
        slug: "strawberries",
        categorySlug: "fruits-and-vegetables",
        subcategorySlug: "fruits",
        inWishlist: true,
        badge: null,
      },
    ],
  },
];

export const items = [
  {
    name: "Alphonso Mangoes Box(6pcs) 1.5kg approx",
    variant: "1.5kg",
    sellingPrice: 120,
    discountedSellingPrice: 100,
    discountPercent: 17,
    image:
      "https://i.postimg.cc/281t55qc/alphonso-mango-6-pcs-box-approx-1300-g.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 2,
    slug: "alphonso-mangoes-box-6pcs-1.5kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: false,
    badge: "New",
  },
  {
    name: "Banana Robusta Box(6pcs)",
    variant: "1kg",
    sellingPrice: 150,
    discountedSellingPrice: 100,
    discountPercent: 34,
    image:
      "https://i.postimg.cc/WbxHqPg2/banana-robusta-6-pcs-box-approx-800-g.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "banana-robusta-box-6pcs-1kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Bhindi Okra",
    variant: "500g",
    sellingPrice: 100,
    discountedSellingPrice: 60,
    discountPercent: 40,
    image: "https://i.postimg.cc/zGWPnPFT/bhendi-okra-500-g.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 1,
    slug: "bhindi-okra-500g",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "vegetables",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Green Capsicum",
    variant: "500g",
    sellingPrice: 100,
    discountedSellingPrice: 56,
    discountPercent: 44,
    image: "https://i.postimg.cc/CKsP2Bt1/green-capsicum-500-g.jpg",
    isActive: true,
    isAvailable: false,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "green-capsicum-500g",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "vegetables",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Coconut 1pc",
    variant: "350g",
    sellingPrice: 50,
    discountedSellingPrice: 30,
    discountPercent: 20,
    image: "https://i.postimg.cc/SKh1V7g3/coconut-1-pc-approx-350-g.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 3,
    slug: "cocunut-1pc-350g",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Lauki bottle gourd",
    variant: "1kg",
    sellingPrice: 50,
    discountedSellingPrice: 45,
    discountPercent: 10,
    image: "https://i.postimg.cc/Y92nB2Kx/lauki-bottle-gourd-1-kg.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 2,
    slug: "lauki-bottle-gourd-1kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "vegetables",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Mango Badami 4pcs",
    variant: "2kg",
    sellingPrice: 250,
    discountedSellingPrice: 200,
    discountPercent: 20,
    image: "https://i.postimg.cc/W399NRsc/mango-badami-4-pcs-approx-1200-g.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "mango-badami-4pcs-2kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: false,
    badge: "Fresh",
  },
  {
    name: "Mosambi",
    variant: "1kg",
    sellingPrice: 100,
    discountedSellingPrice: 89,
    discountPercent: 11,
    image: "https://i.postimg.cc/mkJ89Qcd/mosambi-1-kg.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "mosambi-1kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Musk Melon 1pc",
    variant: "800g",
    sellingPrice: 40,
    discountedSellingPrice: 32,
    discountPercent: 20,
    image: "https://i.postimg.cc/cCrF6DJg/musk-melon-1-pc-approx-600-g.jpg",
    isActive: true,
    isAvailable: false,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "musk-melon-1pc-800g",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Onion",
    variant: "5kg",
    sellingPrice: 100,
    discountedSellingPrice: 95,
    discountPercent: 5,
    image: "https://i.postimg.cc/bYB64j6Q/onion-5-kg-pack.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 1,
    slug: "onion-5kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "vegetables",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Tomato",
    variant: "1kg",
    sellingPrice: 30,
    discountedSellingPrice: 25,
    discountPercent: 16,
    image: "https://i.postimg.cc/JhMKj7nW/tomato-1-kg.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "tomato-1kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "vegetables",
    inWishlist: false,
    badge: "Fresh Stock",
  },
  {
    name: "Orange Imported",
    variant: "1kg",
    sellingPrice: 100,
    discountedSellingPrice: 91,
    discountPercent: 9,
    image: "https://i.postimg.cc/rFRhkYb7/orange-imported-1-kg.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "orange-imported-1kg",
    categorySlug: "fruits-and-vegetables",
    subcategorySlug: "fruits",
    inWishlist: true,
    badge: "Fresh Stock",
  },
  {
    name: "Haldiram Bhujia",
    variant: "1kg",
    sellingPrice: 120,
    discountedSellingPrice: 100,
    discountPercent: 17,
    image: "https://i.postimg.cc/wBHj8ss0/pro-52659.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "haldiram-bhujia-1kg",
    categorySlug: "snacks-and-branded-foods",
    subcategorySlug: "chips-and-namkeen",
    inWishlist: true,
    badge: null,
  },
  {
    name: "Munch",
    variant: "208g",
    sellingPrice: 150,
    discountedSellingPrice: 100,
    discountPercent: 33,
    image: "https://i.postimg.cc/LJjrTMfm/pro-127096.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 2,
    slug: "munch-208g",
    categorySlug: "snacks-and-branded-foods",
    subcategorySlug: "chocolates-and-biscuits",
    inWishlist: false,
    badge: "New",
  },
  {
    name: "Dark Fantasy",
    variant: "300g",
    sellingPrice: 200,
    discountedSellingPrice: 180,
    discountPercent: 10,
    image: "https://i.postimg.cc/JtnCWvwQ/pro-313249.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 2,
    slug: "red-seedless-grapes",
    categorySlug: "snacks-and-branded-foods",
    subcategorySlug: "chocolates-and-biscuits",
    inWishlist: false,
    badge: null,
  },
  {
    name: "Nutrichoice Biscuits",
    variant: "200g",
    sellingPrice: 120,
    discountedSellingPrice: 80,
    discountPercent: 34,
    image: "https://i.postimg.cc/Z9xzThKw/pro-392931.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 1,
    slug: "iceberg-lettuce",
    categorySlug: "snacks-and-branded-foods",
    subcategorySlug: "chocolates-and-biscuits",
    inWishlist: true,
    badge: null,
  },
  {
    name: "Act Two Popcorn",
    variant: "450g",
    sellingPrice: 50,
    discountedSellingPrice: 40,
    discountPercent: 20,
    image: "https://i.postimg.cc/Q9YPtNLJ/pro-352110.jpg",
    isActive: true,
    isAvailable: true,
    maxQuantityAllowed: 5,
    cartQuantity: 0,
    slug: "act-two-popcorn-450g",
    categorySlug: "snacks-and-branded-foods",
    subcategorySlug: "chips-and-namkeen",
    inWishlist: false,
    badge: "New",
  },
];
