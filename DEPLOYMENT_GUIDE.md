# Deployment Guide for Namecheap

## Prerequisites
- Namecheap hosting account (Shared Hosting or cPanel)
- FTP client (FileZilla, WinSCP, or use cPanel File Manager)
- Your project built and ready

## Step 1: Build Your Project for Production

1. Open terminal in your project directory
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. This will create a `dist` folder with all the production-ready files.

## Step 2: Access Namecheap cPanel

1. Go to https://www.namecheap.com/
2. Click "Sign In" and login with:
   - Username: Ibrar6262
   - Password: Sawera@6262

3. Go to "Hosting List" → Select your domain → Click "Manage" → "cPanel"

## Step 3: Upload Files to Namecheap

### Option A: Using cPanel File Manager (Easiest)

1. In cPanel, find and click "File Manager"
2. Navigate to `public_html` folder (this is your website root)
3. Delete any default files (like `index.html` if it exists)
4. Upload all files from your `dist` folder:
   - Select all files in `dist` folder
   - Click "Upload" in File Manager
   - Or drag and drop files into the `public_html` folder

### Option B: Using FTP (FileZilla)

1. In cPanel, go to "FTP Accounts" to get your FTP credentials
2. Download FileZilla (free FTP client)
3. Connect using:
   - Host: ftp.yourdomain.com (or IP provided by Namecheap)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
4. Navigate to `public_html` folder
5. Upload all files from your `dist` folder to `public_html`

## Step 4: Configure for React Router

Since you're using React Router, you need to handle client-side routing:

1. In cPanel File Manager, go to `public_html`
2. Create a `.htaccess` file (if it doesn't exist)
3. Add this content to `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes redirect to `index.html` for React Router to work.

## Step 5: Verify Deployment

1. Visit your domain in a browser
2. Test all pages and navigation
3. Check that the Apollo tracking script is loading (check browser console)

## Important Notes:

- **File Structure**: All files from `dist` folder should be in `public_html`
- **Index File**: Make sure `index.html` is in the root of `public_html`
- **Assets**: All CSS, JS, and image files should be in their respective folders
- **SSL**: Enable SSL certificate in cPanel if not already enabled (Let's Encrypt is free)

## Troubleshooting:

1. **404 Errors on Routes**: Make sure `.htaccess` file is created correctly
2. **Files Not Loading**: Check file permissions (should be 644 for files, 755 for folders)
3. **Build Errors**: Run `npm run build` again and check for errors
4. **Slow Loading**: Enable GZIP compression in cPanel

## Quick Checklist:

- [ ] Project built successfully (`npm run build`)
- [ ] All files from `dist` uploaded to `public_html`
- [ ] `.htaccess` file created with React Router config
- [ ] Domain is pointing to Namecheap nameservers
- [ ] SSL certificate enabled
- [ ] Tested all pages and navigation

## Alternative: Using Namecheap's Website Builder (Not Recommended)

If you have issues with manual deployment, you can also use Namecheap's hosting, but manual FTP/cPanel upload is the standard method for React apps.

