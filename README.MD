## To install dependencies
- npm install

## To run in develop, with server
- npm start

## To run in production
- npm run build


## Notes
Normally there would be linting in a project, I normally follow airbnb lint set.

I assumed the gallery of image would have some sort of lightbox, so I added an event listener to each image.

There's many different ways to style a dropdown (not easy using the native <select /> as legacy browsers struggle). I chose this way as it seemed to be the quickest and is accessible by keyboard users. You could also add the value to a hidden field (or select and match the selected value), which would satisfy the fieldset.

The icons could possibly be a font family, in this case that's a bit over the top as individual svgs are cheaper.
