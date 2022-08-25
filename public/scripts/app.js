window.swup = new Swup({
  plugins: [
    new SwupHeadPlugin(),

    // https://github.com/swup/swupjs-gia-demo
    new SwupJsPlugin([
        {
            from: '(.*)',
            to: '(.*)',
            in: (next, params) => {
              window.ee.emit(
                'transition-in',
                {
                  from : params.transition.from,
                  to : params.transition.to,
                  next
                }
              );
            },
            out: (next, params) => {
              window.ee.emit(
                'transition-out', 
                {
                  from : params.transition.from,
                  to : params.transition.to,
                  next
                }
              );
            }
        },
    ])
  ],
});

// window.swup.on('animationInStart', () => {
//   console.log('animationInStart');
// });

// window.swup.on('animationInDone', () => {
//   console.log('animationInDone');
// });

// window.swup.on('animationOutStart', () => {
//   console.log('animationOutStart');
// });

// window.swup.on('animationOutDone', () => {
//   console.log('animationOutDone');
// });