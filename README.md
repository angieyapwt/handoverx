# HandoverX

HandoverX is a mobile- and desktop-friendly property condition reporting app. Reports and photos are stored only in the browser on the current device.

## Put it on GitHub Pages

1. Create a new public GitHub repository named `HandoverX`.
2. Upload everything in this folder, including the `vendor` folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will show the public website address after deployment.

No build command is required.

## Important storage information

- Data is stored in IndexedDB in the browser.
- Data does not automatically move to another browser or device.
- Clearing site data can remove reports and photos.
- Use **Download all-data backup** regularly.
- Avoid private/incognito browsing.

## Edit the wording

Most visible wording is in `index.html`. Colours and appearance are in `styles.css`. Room names and checklist items are near the top of `app.js`.
