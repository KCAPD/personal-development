KCA Release 3.2.3 — Mobile Year-Dropdown Character Fix

CAUSE
The previous 3.2.2 patch correctly resized Connor inside the purple Growth Map intro,
but the large Connor shown in the main Year 3 dropdown is a different image element:
#yearCharacter inside .year-character-wrap.

MOBILE-ONLY FIX
- #yearCharacter is now approximately 108px wide on normal phones.
- It reduces to approximately 92px on very narrow phones.
- The speech bubble is tightened to match.
- This applies to the dynamic character artwork for every year group, preventing the
  same oversized artwork issue when more years are populated.
- Desktop styling is untouched.
- style.css is versioned to ?v=3.2.3 to prevent stale mobile caching.

UPLOAD / REPLACE
- index.html
- style.css

No JavaScript or image changes are required.
