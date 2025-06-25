export const AwardsData = {
  title: "Awards",
  subtitle: "Industry Recognitions",
  description:
    "Our commitment to innovation and excellence has earned us industry-leading awards and recognition, reinforcing our dedication to delivering top-tier solutions.",
  viewAllLink: "/awards-recognition",
  viewAllText: "View All",
  awards: [
    {
      image: "/images/td-mobile.webp",
      alt: "Top Developers",
    },
    {
      image: "/images/app-development.webp",
      alt: "App Development",
    },
    {
      image: "/images/Bitmap.webp",
      alt: "Bitmap",
    },
    {
      image: "/images/softwareworld.webp",
      alt: "Software-World",
    },
    {
      image: "/images/developer4u.webp",
      alt: "Developer for you",
    },
    {
      image: "/images/wadlin.webp",
      alt: "Wadlin",
    },
    {
      image: "/images/awards-11.webp",
      alt: "Up Firms",
    },
    {
      image: "/images/awards-12.webp",
      alt: "Clutch",
    },
    {
      image: "/images/allaboutapps.webp",
      alt: "All About Apps",
    },
  ],
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // < 640px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350, // < 350px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};
