KCA Release 3.2.1 — Mobile Character Grid + Cache Fix

WHY
The 3.2 stylesheet already contained the correct two-column mobile grid, but the live phone view can continue to receive an older cached style.css because the filename stays unchanged.

THIS PATCH
- forces the travelling-companion character grid to 2 columns below 600px
- adds a higher-specificity guard so older rules cannot win
- versions style.css as style.css?v=3.2.1
- versions script.js as script.js?v=3.2.1
- no content or JavaScript behaviour changes

UPLOAD / REPLACE
- index.html
- style.css

script.js does NOT need replacing unless you prefer to upload all three again.
