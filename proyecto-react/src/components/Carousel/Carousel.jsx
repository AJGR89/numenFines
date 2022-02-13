

// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = void 0;
// const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']; // images must be an array of urls , if using Next JS this could something like
// // const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// // images must be an array of urls , if using Next JS this could something like
// // const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']

// const Carousel = () => {
//   // We will start by storing the index of the current image in the state.
//   const [currentImage, setCurrentImage] = React.useState(0); // We are using react ref to 'tag' each of the images. Below will create an array of
//   // objects with numbered keys. We will use those numbers (i) later to access a ref of a
//   // specific image in this array.

//   const refs = images.reduce((acc, val, i) => {
//     acc[i] = React.createRef();
//     return acc;
//   }, {});

//   const scrollToImage = i => {
//     // First let's set the index of the image we want to see next
//     setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
//     // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
//     // your current view! To do so we pass an index of the image, which is then use to identify our current
//     // image's ref in 'refs' array above.

//     refs[i].current.scrollIntoView({
//       //     Defines the transition animation.
//       behavior: 'smooth',
//       //      Defines vertical alignment.
//       block: 'nearest',
//       //      Defines horizontal alignment.
//       inline: 'start'
//     });
//   }; // Some validation for checking the array length could be added if needed


//   const totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,
//   // or another way round - first to last in previousImage method.

//   const nextImage = () => {
//     if (currentImage >= totalImages - 1) {
//       scrollToImage(0);
//     } else {
//       scrollToImage(currentImage + 1);
//     }
//   };

//   const previousImage = () => {
//     if (currentImage === 0) {
//       scrollToImage(totalImages - 1);
//     } else {
//       scrollToImage(currentImage - 1);
//     }
//   }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.


//   const arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center'; // Let's create dynamic buttons. It can be either left or right. Using
//   // isLeft boolean we can determine which side we'll be rendering our button
//   // as well as change its position and content.

//   const sliderControl = isLeft => /*#__PURE__*/React.createElement("button", {
//     type: "button",
//     onClick: isLeft ? previousImage : nextImage,
//     className: `${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`,
//     style: {
//       top: '40%'
//     }
//   }, /*#__PURE__*/React.createElement("span", {
//     role: "img",
//     "aria-label": `Arrow ${isLeft ? 'left' : 'right'}`
//   }, isLeft ? '◀' : '▶'));

//   return (
//     /*#__PURE__*/
//     // Images are placed using inline flex. We then wrap an image in a div
//     // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
//     // Finally the image itself will be 100% of a parent div. Outer div is
//     // set with position relative, so we can place our cotrol buttons using
//     // absolute positioning on each side of the image.
//     React.createElement("div", {
//       className: "p-12 flex justify-center w-screen md:w-1/2 items-center"
//     }, /*#__PURE__*/React.createElement("div", {
//       className: "relative w-full"
//     }, /*#__PURE__*/React.createElement("div", {
//       className: "carousel"
//     }, sliderControl(true), images.map((img, i) => /*#__PURE__*/React.createElement("div", {
//       className: "w-full flex-shrink-0",
//       key: img,
//       ref: refs[i]
//     }, /*#__PURE__*/React.createElement("img", {
//       src: img,
//       className: "w-full object-contain"
//     }))), sliderControl())))
//   );
// }; //APP Component


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return /*#__PURE__*/React.createElement("div", {
//       className: "w-screen flex justify-center"
//     }, /*#__PURE__*/React.createElement(Carousel, null));
//   }

// }

// ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
// var _default = Carousel;
// exports.default = _default;


// 


// const slideData = [
//   {
//     index: 0,
//     headline: 'New Fashion Apparel',
//     button: 'Shop now',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
//   },
//   {
//     index: 1,
//     headline: 'In The Wilderness',
//     button: 'Book travel',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
//   },
//   {
//     index: 2,
//     headline: 'For Your Current Mood',
//     button: 'Listen',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
//   },
//   {
//     index: 3,
//     headline: 'Focus On The Writing',
//     button: 'Get Focused',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
//   }
// ]


// // =========================
// // Slide
// // =========================

// class Slide extends React.Component {
//   constructor(props) {
//     super(props)

//     this.handleMouseMove = this.handleMouseMove.bind(this)
//     this.handleMouseLeave = this.handleMouseLeave.bind(this)
//     this.handleSlideClick = this.handleSlideClick.bind(this)
//     this.imageLoaded = this.imageLoaded.bind(this)
//     this.slide = React.createRef()
//   }
  
//   handleMouseMove(event) {
//     const el = this.slide.current
//     const r = el.getBoundingClientRect()

//     el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
//     el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
//   }
  
//   handleMouseLeave(event) {    
//     this.slide.current.style.setProperty('--x', 0)
//     this.slide.current.style.setProperty('--y', 0)
//   }
  
//   handleSlideClick(event) {
//     this.props.handleSlideClick(this.props.slide.index)
//   }
  
//   imageLoaded(event) {
//     event.target.style.opacity = 1
//   }
  
//   render() {
//     const { src, button, headline, index } = this.props.slide
//     const current = this.props.current
//     let classNames = 'slide'
    
//     if (current === index) classNames += ' slide--current'
//     else if (current - 1 === index) classNames += ' slide--previous'
//     else if (current + 1 === index) classNames += ' slide--next'
        
//     return (
//       <li 
//         ref={this.slide}
//         className={classNames} 
//         onClick={this.handleSlideClick}
//         onMouseMove={this.handleMouseMove}
//         onMouseLeave={this.handleMouseLeave}
//       >
//         <div className="slide__image-wrapper">
//           <img 
//             className="slide__image"
//             alt={headline}
//             src={src}
//             onLoad={this.imageLoaded}
//           />
//         </div>
        
//         <article className="slide__content">
//           <h2 className="slide__headline">{headline}</h2>
//           <button className="slide__action btn">{button}</button>
//         </article>
//       </li>
//     )
//   }
// }


// // =========================
// // Slider control
// // =========================

// const SliderControl = ({ type, title, handleClick }) => {
//   return (
//     <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
//       <svg className="icon" viewBox="0 0 24 24">
//         <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//       </svg>
//     </button>
//   )
// }


// // =========================
// // Slider
// // =========================

// class Slider extends React.Component {
//   constructor(props) {
//     super(props)
    
//     this.state = { current: 0 }
//     this.handlePreviousClick = this.handlePreviousClick.bind(this)
//     this.handleNextClick = this.handleNextClick.bind(this)
//     this.handleSlideClick = this.handleSlideClick.bind(this)
//   }
  
//   handlePreviousClick() {
//     const previous = this.state.current - 1
        
//     this.setState({ 
//       current: (previous < 0) 
//         ? this.props.slides.length - 1
//         : previous
//     })
//   }
  
//   handleNextClick() {
//     const next = this.state.current + 1;
    
//     this.setState({ 
//       current: (next === this.props.slides.length) 
//         ? 0
//         : next
//     })
//   }
  
//   handleSlideClick(index) {
//     if (this.state.current !== index) {
//       this.setState({
//         current: index
//       })
//     }
//   }

//   render() {
//     const { current, direction } = this.state
//     const { slides, heading } = this.props 
//     const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
//     const wrapperTransform = {
//       'transform': `translateX(-${current * (100 / slides.length)}%)`
//     }
    
//     return (
//       <div className='slider' aria-labelledby={headingId}>
//         <ul className="slider__wrapper" style={wrapperTransform}>
//           <h3 id={headingId} class="visuallyhidden">{heading}</h3>
          
//           {slides.map(slide => {
//             return (
//               <Slide
//                 key={slide.index}
//                 slide={slide}
//                 current={current}
//                 handleSlideClick={this.handleSlideClick}
//               />
//             )
//           })}
//         </ul>
        
//         <div className="slider__controls">
//           <SliderControl 
//             type="previous"
//             title="Go to previous slide"
//             handleClick={this.handlePreviousClick}
//           />
          
//           <SliderControl 
//             type="next"
//             title="Go to next slide"
//             handleClick={this.handleNextClick}
//           />
//         </div>
//       </div>
//     )
//   }
// }


// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));

// export default Carousel