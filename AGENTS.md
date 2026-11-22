# Crystal Blue Studios

This is a static copy of Crystal Blue Sound Studios. It is not the live website. It has no custom domain. The public address, after hosting, is https://crystalbluestudios.netlify.app. Do not add crystalbluestudios.com or any other custom domain. Do not turn on Netlify DNS or change any nameservers. The current website stays where it is.

Keep the wording on the pages as designed, including "Crystal Blue Sound Studios". The pages are Home, About, Services, Gear, Testimonials, and Contact. Do not invent pages. There is no posts sitemap.

Pages use folder URLs: `/about/` is `about/index.html`. Do not rename or move a page without a 301 in `netlify.toml`.

The footer line is `© Copyright Crystal Blue Sound Studios`. Do not add a year. The live footer has no year.

Keep mailto links as mailto links. Keep `nick@crystalbluestudios.com` and `(727) 501-6441` as they appear.

## GitHub

- Account: `ecotto7`. Do not create the repo under BIG-IC.
- Repository: `ecotto7/crystalbluestudios`, public, branch `main`.
- Static files live at the repo root. There is no build step.

## Netlify

- Team: Gonzo Systems. The team slug is `ecotto7`. Do not create the site on any other Netlify account.
- Site name: `crystalbluestudios`, so the address is https://crystalbluestudios.netlify.app. If that name is taken, stop and ask before picking another.
- Import `ecotto7/crystalbluestudios` with an empty build command and publish directory `.`.
- `netlify.toml` stays at the repo root with `publish = "."`.
- Deploys happen only by pushing to `main`. Never run `netlify deploy`, `netlify deploy --prod`, or a deploy through the Netlify tools unless explicitly asked. Each production deploy costs 15 credits from a shared 300/month pool. If that pool runs out, every site on the team pauses. The GitHub import is the one production deploy.

## Forms

The contact form stays on its existing provider. It is the Elementor form from the live site: Name, Email, Message, and Send, with form id `a6353de`. Copy that form. Do not use Netlify Forms. Do not add `data-netlify`, a form-name field, or a honeypot. Do not tell future edits to switch this form to Netlify Forms.

There is no JotForm, audio embed, or video embed on these pages. If one is added later, keep it on that provider and allow its script, frame, and image hosts in the content security policy.

## Headers

Security headers for all pages live in `netlify.toml`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` with camera, microphone, geolocation, and payment disabled
- `Content-Security-Policy-Report-Only` (not an enforcing policy)
- `Strict-Transport-Security: max-age=31536000` without `includeSubDomains` and without `preload`
- `Cache-Control: public, max-age=604800` for `/images/*` only

Before changing the content security policy, check every HTML file for inline scripts, external images, and iframes, and list anything the policy would block.

## Images

Compress images before committing and keep them under about 300 KB.
