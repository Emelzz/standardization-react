# Code Walkthrough Script

## 1. Demonstration of the completed application

This is the landing page for Bandage, a home decor and furniture e-commerce site.
Scrolling from the top: a green info bar with contact details, the main header with
logo, nav, and cart/wishlist icons, a hero grid of four furniture categories, a
bestseller products grid pulled live from an API, a three-column services section,
featured blog posts, a customer testimonial with a photo gallery, and a call-to-action
banner before the footer.

The page is responsive: on mobile the hero tiles and product grid stack into a single
column and the nav collapses into a hamburger menu. On tablet and desktop it expands
into the multi-column layout you see here.

The bestseller product grid is the one section wired to real data. It calls the
DummyJSON products API, shows a loading skeleton on first load, and a "Load More
Products" button that fetches and appends the next page.

## 2. Explanation of the overall project architecture

The project is a Vite + React + TypeScript app. State and data fetching are handled
by Redux Toolkit and RTK Query, and styling is plain CSS, no framework, no CSS-in-JS.

The architecture splits into four concerns:
- `app/` holds the Redux store setup and typed hooks.
- `api/` holds the RTK Query API slice that talks to the products endpoint.
- `components/` holds the UI, split into `layout` (header, top bar, footer, things
  that appear on every page) and `sections` (the blocks that make up the landing
  page itself: hero, bestseller products, services, and so on).
- `data/` holds static content arrays, like nav links and footer links, that aren't
  fetched from an API but still shouldn't be hardcoded inline in JSX.

Each section is self-contained: its own folder, its own component file, its own CSS
file, colocated together instead of separated into far-apart `components/` and
`styles/` trees.

## 3. Walkthrough of key components and folder structure

Starting from `src/App.tsx`: it composes the whole page, top bar, header, then the six
main sections, then the footer. Nothing else lives in App.tsx, it's pure composition.

Inside `components/layout`: TopBar is the green contact bar, desktop-only. Header
handles the logo, nav links, and the mobile menu toggle with its own open/closed
state. Footer has the link columns and the newsletter form.

Inside `components/sections`, each folder is one visual block on the page: Hero,
BestsellerProducts, ProductCard, Services, FeaturedPosts, Testimonial, CtaBanner.
ProductCard is separate from BestsellerProducts because it's the one reusable unit,
it also renders a skeleton version of itself for the loading state.

`components/icons.tsx` holds every icon in the app as a small inline SVG component.
No icon library dependency, since the icon set needed was small and fixed.

## 4. Explanation of the Redux Toolkit and RTK Query implementation

The store is set up in `app/store.ts` with `configureStore`, and the only reducer
registered right now is the products API slice's reducer.

The API slice lives in `api/productsApi.ts`, built with `createApi` and
`fetchBaseQuery` pointed at the DummyJSON base URL. It exposes one endpoint,
`getProducts`, which takes `limit` and `skip` and returns the product list.

The interesting part is the pagination. RTK Query normally caches each unique set of
query arguments separately, which would mean skip=0 and skip=10 are treated as two
different cache entries. For a "Load More" pattern I want them to accumulate into one
list instead. That's what `serializeQueryArgs` and `merge` are doing: serializeQueryArgs
collapses every call to the same cache key regardless of skip, and merge pushes the
new page's products onto the existing cached array rather than replacing it.
`forceRefetch` tells RTK Query to actually hit the network again when skip changes,
since otherwise it would just return the same cached result.

The typed hooks in `app/hooks.ts`, `useAppDispatch` and `useAppSelector`, aren't doing
much work yet since there's no other slice, but they're there so any future slice
gets type safety for free instead of retrofitting it later.

## 5. Description of state flow throughout the application

Almost all state on this page is either server state or local component state, there's
no global app-level slice beyond RTK Query's own cache.

The bestseller section owns one piece of local state: `skip`, tracked with `useState`.
When "Load More" is clicked, skip increases by the page size, which changes the query
argument passed to `useGetProductsQuery`, which triggers a new fetch, which the merge
function appends to the existing cached list. The component re-renders with the
combined product array and works out whether to still show the button by comparing
the loaded count to the API's reported total.

The Header owns its own `isMenuOpen` boolean for the mobile nav, and the footer form
owns its own `email` string. Both are local because nothing outside those components
needs to know about them.

## 6. Discussion of key design decisions and trade-offs

Plain CSS with a shared `variables.css` of design tokens (colors, spacing, font sizes,
breakpoints), instead of a CSS framework or CSS-in-JS. The brief specified vanilla CSS,
and colocating each component's CSS file next to it keeps styles scoped by convention
even without CSS Modules.

RTK Query's cache-merge pattern for "Load More" instead of managing a products array by
hand in a slice. It's the same amount of code, but it means the API layer stays the
single source of truth for what's been fetched, and I get request de-duping and
loading/error flags for free.

Hardcoded content (nav links, footer columns, featured posts, services) lives in
`data/` as typed arrays instead of inline JSX, and instead of a CMS or second API,
because none of that content needs to be dynamic for a landing page and adding a
content source would be over-engineering for this scope.

## 7. Challenges encountered and how they were resolved

The Figma link required authentication to inspect properly, so the page was rebuilt
from a full set of scrolling screenshots (mobile and desktop) instead of exact Figma
node data. That meant colors, spacing, and font were reconstructed by eye rather than
pulled exactly, so some values are close approximations rather than exact hex/px matches.

Initial placeholder images and the default system font didn't match the source design
at all: random unrelated stock photos and a plain system sans-serif instead of the
template's actual look. Fixed by switching placeholder images to a themed image
service that returns real, subject-relevant photos (furniture, plants, interiors) at
higher resolution, and adding the Mulish Google Font to match the template's typeface.

RTK Query's default caching behavior doesn't support accumulating paginated results out
of the box, it treats each `skip` value as a separate cache entry. Solved using the
`serializeQueryArgs` + `merge` + `forceRefetch` pattern to turn it into an
accumulating "Load More" list under one cache key.

## 8. Improvements that would be made with additional time

Finish the responsive polish pass, a full breakpoint-by-breakpoint audit against the
screenshots rather than the current per-section responsive rules.

Get real design specs from Figma (colors, spacing, exact type scale) via the Figma API
or dev mode inspection, instead of eyeballing screenshots, and swap the themed
placeholder images for the actual design assets.

Add basic tests, at minimum a smoke test on the products query hook and the "Load More"
merge behavior, since that's the one section with real logic.

## 9. Brief walkthrough of the Git commit history

The repo isn't initialized yet, so there's no real history to show on camera yet.
Since nothing has been committed, each file can go straight into its final version,
one file, one commit, no partial hunks or re-touching a file across two commits.
This is the commit-by-commit plan, in order:

**1. `chore: scaffold Vite React + TypeScript project`**
`package.json`, `package-lock.json`, `tsconfig.json`, `tsconfig.app.json`,
`tsconfig.node.json`, `vite.config.ts`, `.oxlintrc.json`, `.gitignore`, `index.html`,
`README.md`, `public/favicon.svg`, `public/icons.svg`

**2. `chore: add design tokens and global styles`**
`src/styles/variables.css`, `src/styles/global.css`

**3. `feat: set up Redux store and RTK Query products API`**
`src/types/product.ts`, `src/api/productsApi.ts`, `src/app/store.ts`,
`src/app/hooks.ts`, `src/main.tsx`

**4. `feat: build header, top bar, and footer`**
`src/components/icons.tsx`, `src/data/navLinks.ts`, `src/data/footerLinks.ts`,
`src/components/layout/TopBar/TopBar.tsx`, `src/components/layout/TopBar/TopBar.css`,
`src/components/layout/Header/Header.tsx`, `src/components/layout/Header/Header.css`,
`src/components/layout/Footer/Footer.tsx`, `src/components/layout/Footer/Footer.css`

**5. `feat: build hero section`**
`src/components/sections/Hero/Hero.tsx`, `src/components/sections/Hero/Hero.css`

**6. `feat: build bestseller products section`**
`src/components/sections/ProductCard/ProductCard.tsx`,
`src/components/sections/ProductCard/ProductCard.css`,
`src/components/sections/BestsellerProducts/BestsellerProducts.tsx`,
`src/components/sections/BestsellerProducts/BestsellerProducts.css`

**7. `feat: build services, featured posts, and testimonial sections`**
`src/components/sections/Services/Services.tsx`,
`src/components/sections/Services/Services.css`, `src/data/featuredPosts.ts`,
`src/components/sections/FeaturedPosts/FeaturedPosts.tsx`,
`src/components/sections/FeaturedPosts/FeaturedPosts.css`,
`src/components/sections/Testimonial/Testimonial.tsx`,
`src/components/sections/Testimonial/Testimonial.css`

**8. `feat: build CTA banner section and complete page composition`**
`src/components/sections/CtaBanner/CtaBanner.tsx`,
`src/components/sections/CtaBanner/CtaBanner.css`, `src/App.tsx`

**9. `chore: responsive pass across breakpoints`**
Still pending, no files yet, this is the current open item.

Note: the font and placeholder-image corrections aren't a separate commit. Since none
of this is committed yet, those fixes are already folded into the files above (Hero,
Testimonial, CtaBanner, featuredPosts data, variables.css, index.html) in their final
state, so no file needs touching twice.

`WALKTHROUGH_SCRIPT.md` itself is a personal recording aid, not part of the app, leave
it out of the commits.
