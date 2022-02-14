module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-img": "url('/src/assets/images/setup.jpg')",
        "consoles-img": "url('/src/assets/images/cards/console.jpg')",
        "ledtv-img": "url('/src/assets/images/cards/tv.jpg')",
        "leds-img": "url('/src/assets/images/cards/leds.jpg')",
        "notebooks-img": "url('/src/assets/images/cards/notebook2.jpg')",
        "sound-img": "url('/src/assets/images/cards/sound.jpg')",
        "chairs-img": "url('/src/assets/images/cards/chair.jpg')",
        "mouse-img": "url('/src/assets/images/cards/mouse.jpg')",
      },
      spacing: {
        46: "11.5rem",
        47: "11.75rem",
      },
    },
  },
  plugins: [],
};
