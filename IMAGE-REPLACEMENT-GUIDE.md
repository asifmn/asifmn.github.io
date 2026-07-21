# Image Replacement Guide — Version 3

Most preview images are currently loaded from Unsplash URLs inside the HTML files.

## Recommended local image folders

Create these folders inside `assets/images/`:

- `hero/`
- `services/`
- `portfolio/`
- `articles/`
- `locations/`
- `branding/`

## Example

Place a file here:

`assets/images/services/painting.jpg`

On a page in the website root, use:

```html
<img src="assets/images/services/painting.jpg" alt="Creative Handyman painting project">
```

On a page inside `services/`, `articles/`, or `locations/`, use:

```html
<img src="../assets/images/services/painting.jpg" alt="Creative Handyman painting project">
```

## Recommended sizes

- Homepage hero: 1800 × 1100 px
- Service card images: 1000 × 700 px
- Portfolio images: 1200 × 900 px
- Article images: 1400 × 850 px
- Use JPG or WebP at approximately 75–85% quality.

## SEO image rules

- Use real project photographs whenever possible.
- Rename files descriptively, such as `deck-repair-sartell-mn.jpg`.
- Write accurate alt text.
- Do not reuse the same photo for every service.
- Remove location metadata from client photos when privacy matters.
