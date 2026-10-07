# Team checkpoints

Created: 6 October 2026.

- team-awal-3-orang-3334e55.zip: original three-person team from Git commit 3334e55. Includes staff page, global CSS, and original photos used by that page.
- team-sekarang-20261006-152612.zip and matching folder: current seven-person team, current framing, original photos, retained enhanced alternatives, and HTML preview.

These are file backups, not Git commits or tags. To restore, extract the selected ZIP into a separate folder, then copy its files into the project using the same relative paths. Save any newer changes before overwriting. Restoring globals.css also restores all global styles contained in that snapshot. The initial version has no HTML preview; an existing current preview will still show the current team unless regenerated.

## Full project backup - 7 October 2026

The project, previews, alternative images, and these team checkpoints are saved in Git. The tag `backup-2026-10-07` identifies this full-project snapshot on GitHub and locally.

To restore from GitHub without overwriting your current work:

```powershell
git clone --branch backup-2026-10-07 https://github.com/dikiakhyar/archindo-web.git archindo-restored
cd archindo-restored
npm.cmd ci
```

Local full-project backups are in `output/local-backups/`: a ZIP of the tagged files and a Git bundle containing all local branches, tags, and their commit history. This folder is local-only. Extract the ZIP into a new folder, or restore the bundle with:

```powershell
git clone --branch backup-2026-10-07 "output/local-backups/archindo-2026-10-07.bundle" archindo-restored
```

Run the bundle command from the original project folder, or replace the bundle path with its absolute location. Dependencies, build output, and ignored environment files are not included in the full-project backups. Install dependencies with `npm.cmd ci`; supply any required environment settings separately.

The current snapshot's 15 files were verified against their sources with SHA-256 hashes.
