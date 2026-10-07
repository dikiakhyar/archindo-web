# Team portrait enhancement

Tool: built-in imagegen (identity-preserve edit).

Inputs: the original photographs of Marzuki, Nur Laila, Maulydia, Daniel, and Ageng in `public/`. Each photograph is edited separately. Original files are retained.

Prompt used for each person (with their name substituted):

> Use case: identity-preserve. Edit target: the sole attached photograph. Asset: [name] website team portrait. Make a conservative high-resolution photographic restoration and a 3:4 portrait crop showing the existing person's complete head and shoulders/upper chest. Keep approximately 10% headroom and head width roughly 45-55% of the frame. Improve perceived sharpness, reduce JPEG artifacts, retain natural photographic skin texture. Preserve the exact person's facial geometry, expression, hair/hijab, glasses/sunglasses, skin tone, original clothing, original pose and original background. Do not beautify, change identity, reconstruct new facial features, invent details or alter logos. Do not add anything. No text, watermark, montage, or new people. This is a restoration of the supplied photograph, not a new portrait.

AI enhancement can approximate missing detail; it does not recover an exact historical record of the original face. Review the local preview before publishing.

Mulyadi's image is replaced with the latest seated portrait supplied by the user, without AI processing.

Daniel's generated variant was rejected because lettering on his clothing changed. The website retains his original 3122 × 4160 photograph with less enlargement (350% instead of 550%) and requests sufficient image resolution for that enlargement.

Ageng's generated variant was rejected because details on his blazer emblem changed. His original photograph is retained with 180% enlargement instead of 230%, and the website requests sufficient resolution for that enlargement.

Selected outputs:

- `public/marzuki-portrait-enhanced.jpg` (1086 × 1448)
- `public/nur-laila-portrait-enhanced.jpg` (1086 × 1448)
- `public/maulydia-portrait-enhanced.jpg` (1086 × 1448)
- `public/mulyadi-alwi.jpg` (2252 × 4000; latest user-supplied seated portrait)

Selected AI outputs are encoded as JPEG at quality 92. The original generated PNGs remain in Codex's generated-image folder. Original input photographs are retained in `public/`, except Mulyadi's previous low-resolution website copy, which was explicitly replaced by his higher-resolution original.

The installed Next.js guide was unavailable because dependencies are not installed. The matching Next.js 16.2.1 image component guide was read from https://raw.githubusercontent.com/vercel/next.js/v16.2.1/docs/01-app/03-api-reference/02-components/image.mdx before changing the `sizes` value.

Latest update: at the user's request, all custom zoom was reset. Original uncropped photographs are used again for Marzuki, Nur Laila, and Maulydia; enhanced alternatives are retained but unused. Mulyadi uses the latest seated portrait. All cards use normal cover framing and standard image sizes.
