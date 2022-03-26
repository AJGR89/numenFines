module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "consoles-img": "url('/src/assets/images/categories/consoles.jpg')",
        "display-img": "url('/src/assets/images/categories/display.jpg')",
        "leds-img": "url('/src/assets/images/categories/luces4.jpg')",
        "notebooks-img": "url('/src/assets/images/categories/notebooks.jpg')",
        "sound-img": "url('/src/assets/images/categories/sound.jpg')",
        "chairs-img": "url('/src/assets/images/categories/gaming chairs.jpg')",
        "mouse-img": "url('/src/assets/images/categories/mouse.jpg')",
        "fondo-img": "url('/src/assets/images/footer/hexagons.jpg')",
        "fondosm-img": "url('/src/assets/images/footer/abstracto.jpg')",
        "colors-img": "url('/src/assets/images/carousel/colors.jpg')",
        "logo-img": "url('/src/assets/images/navbar/logo.png')",
      },
      spacing: {
        46: "11.5rem",
        47: "11.75rem",
        128: "47rem",
        120: "30.5rem",
        121: "35rem",
        122: "32rem",
      },
      fontFamily: {
        PoiretOne: ["Poiret One"],
        monserratAlt: ["Montserrat Alternates"],
        urbanist: ["Urbanist"],
      },
    },
  },
  plugins: [],
};
