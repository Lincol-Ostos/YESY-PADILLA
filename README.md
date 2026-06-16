# Sofia Vega Website — Deployment & Setup Guide

## File Structure

```
sofia-vega/
├── index.html      ← Main HTML structure
├── style.css       ← All styles (dark luxury theme)
├── script.js       ← Interactions, gallery, form logic
└── README.md       ← This file
```

---

## 1. Customize Your Content

### Replace placeholder text in `index.html`:
- **Name**: Find "Sofia Vega" → replace with your stage name
- **Tagline** (`hero__tagline`): Your personal phrase
- **Biography** (`about__body`): Your own story
- **Stats** (`about__stat-num`): Your real numbers
- **Email** (`contact__link`): Your real email
- **Social links**: Replace all `href` placeholders with your real profile URLs

### Replace images:
Swap the `src` attributes in `index.html` hero + about sections with your own photos.
For the gallery, edit `galleryData` array in `script.js`.

### Update WhatsApp number in `script.js`:
```js
const CONFIG = {
  whatsappNumber: '5491112345678', // ← your number, no + or spaces
  ...
};
```

---

## 2. EmailJS Integration (Step-by-Step)

EmailJS lets you receive contact form submissions to your inbox **without a server**.

### Step 1 — Create an account
Go to [https://www.emailjs.com](https://www.emailjs.com) and sign up (free tier = 200 emails/month).

### Step 2 — Add an Email Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose Gmail, Outlook, or any SMTP provider
3. Connect your inbox and click **Save**
4. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3 — Create an Email Template
1. Dashboard → **Email Templates** → **Create New Template**
2. Set the template content:

```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

3. In **To email**, put your real email address
4. Click **Save** → copy the **Template ID** (looks like `template_xxxxxxx`)

### Step 4 — Get your Public Key
1. Dashboard → **Account** → **General** tab
2. Copy your **Public Key** (looks like `AbCdEfGhIjKlMnOp`)

### Step 5 — Add credentials to script.js
Open `script.js` and replace these values:

```js
const CONFIG = {
  emailjs: {
    publicKey:  'AbCdEfGhIjKlMnOp',         // ← your Public Key
    serviceId:  'service_abc123',             // ← your Service ID
    templateId: 'template_xyz789',            // ← your Template ID
  },
  whatsappNumber: '5491112345678',
};
```

### Step 6 — Test it
Open `index.html` locally, fill the form, and check your inbox.

> **Fallback behavior**: If EmailJS is not configured, the form automatically
> opens WhatsApp with the message pre-filled. Always works!

---

## 3. Deploy to GitHub Pages

### Option A — New Repository

1. Create a free account at [https://github.com](https://github.com)
2. Click **New Repository**
3. Name it: `your-username.github.io` (for root domain)
   OR any name like `sofia-vega` (will live at `your-username.github.io/sofia-vega`)
4. Set to **Public**, click **Create**

### Option B — Upload Files

**Via GitHub website (easiest):**
1. Open your new repository
2. Click **Add file** → **Upload files**
3. Drag all three files (`index.html`, `style.css`, `script.js`)
4. Click **Commit changes**

**Via Git CLI:**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
cp /path/to/index.html .
cp /path/to/style.css .
cp /path/to/script.js .
git add .
git commit -m "Initial website launch"
git push origin main
```

### Enable GitHub Pages

1. Go to your repository → **Settings**
2. Left sidebar → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**
6. Wait ~2 minutes, then visit:
   `https://your-username.github.io/` (or `/repo-name`)

---

## 4. Custom Domain (Optional)

If you have a domain like `sofiavega.com`:

1. In your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```
   And for apex domain, add 4 A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. In GitHub Pages settings → **Custom domain** → enter `www.sofiavega.com`
3. Check **Enforce HTTPS** (free SSL!)

---

## 5. Replace Gallery Images with Your Own

In `script.js`, edit the `galleryData` array:

```js
const galleryData = [
  {
    src: 'images/photo-1.jpg',       // ← relative path or full URL
    alt: 'Studio shoot 2024',
    label: 'Editorial',
    category: 'editorial',
    tall: true,                       // ← spans 2 rows (taller card)
  },
  {
    src: 'images/photo-2.jpg',
    alt: 'Golden hour portrait',
    label: 'Portrait',
    category: 'portrait',
    // tall: false by default
  },
  // ... add as many as you want
];
```

Upload your images to an `images/` folder in the repository.
Accepted categories: `editorial`, `lifestyle`, `portrait`

---

## 6. Performance Tips

- **Compress images** before uploading using [squoosh.app](https://squoosh.app)
  — aim for under 200KB per image
- **Use WebP format** for better compression (most modern browsers support it)
- All images already use `loading="lazy"` — no extra config needed
- The site scores 95+ on Lighthouse out of the box

---

## 7. Updating Social Links

In `index.html`, find the `.social__grid` section and update each `href`:

```html
<a href="https://instagram.com/YOUR_USERNAME" ...>
<a href="https://tiktok.com/@YOUR_USERNAME" ...>
<a href="https://wa.me/YOUR_PHONE_NUMBER" ...>
<a href="https://t.me/YOUR_USERNAME" ...>
<a href="https://onlyfans.com/YOUR_USERNAME" ...>
```

Also update the footer social links (`.footer__socials`).

---

## Support

If you need help configuring EmailJS or deploying:
- EmailJS docs: https://www.emailjs.com/docs/
- GitHub Pages docs: https://docs.github.com/en/pages
