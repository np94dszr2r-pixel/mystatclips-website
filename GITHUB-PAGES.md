# GitHub Pages setup — instructions only

The separate website repository is [np94dszr2r-pixel/mystatclips-website](https://github.com/np94dszr2r-pixel/mystatclips-website). The approved content is preserved, including the current legal and media placeholders described in `README.md`. No custom domain or DNS changes have been made.

## Prepare a separate repository

1. Create a repository for the website on your own GitHub account.
2. Copy the **contents** of this website folder to the repository root, including the hidden `.github/` folder and `pnpm-lock.yaml`. Do not put everything inside another `artifacts/` folder.
3. Do not copy `node_modules/`, `dist/`, `.prerender/`, the mobile app, API, root workspace files, or secrets.
4. Commit the website files. This does **not** trigger publication: the workflow is deliberately manual.

The repository must contain these at its root:

```text
.github/workflows/pages.yml
.gitignore
package.json
pnpm-lock.yaml
tsconfig.json
vite.config.ts
README.md
GITHUB-PAGES.md
scripts/
src/
public/
index.html
support.html
how-to.html
quick-start.html
complete-guide.html
partners.html
privacy.html
terms.html
```

HTML entries are regenerated when you run development or build commands, so their presence in the copied project is optional.

## Publish only when approved

The connected GitHub OAuth integration does not grant workflow-write permission. The uploaded repository therefore includes the workflow template as **`pages-workflow.yml`** rather than an active workflow file.

Install it through GitHub's own web editor:

1. Open `pages-workflow.yml` in the website repository and click the pencil (**Edit this file**).
2. Change the filename at the top to **`.github/workflows/pages.yml`**, keeping the contents unchanged.
3. Click **Commit changes** and commit to `main`. This installs the workflow but does not publish.
4. Then use the manual publishing steps below.

1. Open the repository's **Settings → Pages**.
2. Choose **GitHub Actions** as the publishing source.
3. Open **Actions → Publish approved website to GitHub Pages → Run workflow**.
4. Leave the base override blank for an ordinary project site.
5. The workflow checks types, renders all eight pages into static HTML (including the three clean How-To directory routes and `/partners/`), validates local links/assets/anchors, and publishes only the generated `dist/` folder.
6. GitHub shows the actual public URL in the completed publishing job and Pages settings. Use that URL; no repository or domain name has been assumed here.

For a project repository, the workflow automatically uses `/repository-name/`. For an account-level `username.github.io` repository, it uses `/`. This ensures images and navigation remain within the correct site path. Publishing on a custom domain requires the `/` override instead.

## Custom domain — do not change DNS until you are ready

1. Choose the actual hostname you own. No hostname is assumed or preconfigured.
2. In GitHub Pages settings, verify ownership of the domain using GitHub's instructions, then enter your chosen **Custom domain**.
3. Follow the current GitHub DNS guidance for your exact hostname and registrar. A subdomain typically uses a CNAME; an apex/root domain uses the records GitHub specifies. Use the current values from GitHub rather than copying old IP addresses.
4. Re-run the publishing workflow with the base override set to **`/`**. Do not retain `/repository-name/` when the site is served at the root of a custom domain.
5. Once GitHub finishes domain verification and certificate setup, enable **Enforce HTTPS**.
6. Check the home page, supporting pages, `/how-to`, both guide links, images, and cross-page section links on the actual published domain.

No `CNAME` file, DNS records, or custom domain was created as part of website preparation. The hostname is configured through your repository's Pages settings when you choose to proceed.

Current official references:

- [Publishing with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verifying your custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

### DNS records to add later, not now

These values were checked against GitHub's official documentation on October 3, 2026. Recheck that documentation when you connect the domain.

For a root/apex domain, add four separate `A` records with host `@`:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Optional IPv6 support uses four separate `AAAA` records at `@` alongside the IPv4 records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For `www` or another chosen subdomain, add a `CNAME` whose host is that subdomain (for example, `www`) and whose value is **`np94dszr2r-pixel.github.io`**. Do not include `https://`, a slash, or `mystatclips-website` in the DNS value.

Alternatively, if the DNS provider supports an apex `ALIAS` or `ANAME`, GitHub documents pointing it to `np94dszr2r-pixel.github.io` instead of using the apex IP records.

Verify ownership first in the GitHub account's **Settings → Pages → Add a domain**. GitHub will give you a unique TXT record name and value; use exactly those values, not an invented verification token. Then save the chosen hostname in the repository's **Settings → Pages → Custom domain** before changing its routing records at the DNS provider.

Remove or replace only conflicting website-routing records for the chosen hostname. Preserve email MX, SPF, DKIM, DMARC, and unrelated DNS records. Avoid wildcard DNS. Allow up to 24 hours for propagation and HTTPS availability, then enable **Enforce HTTPS**.

Finally, run the Pages workflow with **base override `/`**, and check all five pages, assets, section links, and Kit signup on the custom domain. GitHub Actions publishing does not require a repository `CNAME` file.

## Troubleshooting

- **Missing images or navigation:** check that the build base matches the destination (`/repository-name/` for a project site, `/` for an account site or custom domain).
- **Direct page gives a 404:** confirm that the complete `dist/` output was published and the `.html` filenames are unchanged.
- **Workflow cannot publish:** confirm Pages uses GitHub Actions and your account/repository permits Pages; check the workflow's reported permission error.
- **Signup does not load:** the browser or Kit's security checks may block the embed. The website offers retry and the supplied public Kit signup-page link if loading fails. A blocked script is not proof that the form is unpublished. Submission and confirmation belong to Kit, never a fake website success message.
- **Still seeing placeholders:** expected until final legal text, screenshots, video, and real links are supplied.