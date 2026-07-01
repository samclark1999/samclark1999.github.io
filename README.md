# samclark1999.github.io

Personal Website — [Go to Site](https://samclark1999.github.io)

Built with React, hand-written SASS (no CSS framework), and Webpack.

## Editing content

Projects, skills, achievements, and all contact/social info live in plain data files under [src/data/](src/data/) — no build changes needed after editing them:

- `profile.js` — name, role, bio, stats, email/social links, nav labels
- `projects.js` — portfolio project cards
- `skills.js` — skill categories + the skill list
- `achievements.js` — awards/recognition cards

## Changing brand styles

Colors, fonts, spacing, radii, shadows, and breakpoints are all SASS variables in [src/styles/_variables.scss](src/styles/_variables.scss). Change a value there and it propagates everywhere — components read design tokens (`var(--surface)`, `var(--accent)`, etc.) rather than hardcoded colors, so a card looks right on either the dark or light section background automatically.

## Development

```
npm install
npm start      # dev server at localhost:3000
npm run build  # production build to dist/
```
