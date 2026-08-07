KCA Release 3.1.1 — Character Popup Fix

Replace ONLY script.js.

Cause fixed:
renderYear(1) was being called before the new Year 3 Growth Map DOM variables were initialised.
That caused JavaScript execution to stop before the character-card click handlers were attached.

This patch moves the initial renderYear(1) call to the correct point in the script.

No HTML, CSS or image changes are required.
