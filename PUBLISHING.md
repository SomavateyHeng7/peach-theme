# How to Publish Soma Theme to VS Code Marketplace

## ✅ Pre-Publishing Checklist

Your theme is ready! Here's what's been set up:
- ✓ Two theme variants (Dark & Light)
- ✓ Valid JSON theme files
- ✓ Comprehensive language support (15+ languages)
- ✓ package.json with proper metadata
- ✓ README.md with documentation
- ✓ LICENSE file (MIT)

## 📋 Before Publishing - Update These Fields

### 1. Update package.json
Open `package.json` and replace:
- `"publisher": "your-publisher-name"` → Your VS Code Marketplace publisher name
- `"name": "Your Name"` → Your actual name
- `"url": "https://github.com/yourusername/soma-theme"` → Your GitHub repo URL

### 2. Create an Icon (Optional but Recommended)
Create a 128x128px PNG icon named `icon.png` in the root directory. This will be your theme's logo on the marketplace.

### 3. Add Screenshots (Highly Recommended)
Take screenshots of your theme in action and add them to a `screenshots/` folder, then reference them in README.md.

## 🚀 Publishing Steps

### Step 1: Install vsce (VS Code Extension Manager)
```bash
npm install -g @vscode/vsce
```

### Step 2: Create a Publisher Account
1. Go to https://marketplace.visualstudio.com/manage
2. Sign in with your Microsoft/GitHub account
3. Click "Create publisher"
4. Choose a unique publisher ID (this goes in package.json)
5. Fill in your details

### Step 3: Get a Personal Access Token
1. Go to https://dev.azure.com/
2. Click on your profile → Security → Personal Access Tokens
3. Click "+ New Token"
4. Name it "VS Code Marketplace"
5. Organization: "All accessible organizations"
6. Expiration: Choose your preference (90 days, 1 year, custom)
7. Scopes: Select "Marketplace" → Check "Manage"
8. Click "Create" and SAVE THE TOKEN (you won't see it again!)

### Step 4: Login with vsce
```bash
vsce login your-publisher-name
```
Enter your Personal Access Token when prompted.

### Step 5: Package Your Extension (Test First)
```bash
vsce package
```
This creates a `.vsix` file you can test locally:
```bash
code --install-extension soma-theme-1.0.0.vsix
```

### Step 6: Publish to Marketplace
```bash
vsce publish
```

That's it! Your theme will be live on the VS Code Marketplace within a few minutes.

## 🔄 Updating Your Theme

When you make changes:

1. Update the version in `package.json`:
   - Patch: 1.0.0 → 1.0.1 (bug fixes)
   - Minor: 1.0.0 → 1.1.0 (new features)
   - Major: 1.0.0 → 2.0.0 (breaking changes)

2. Update CHANGELOG.md with your changes

3. Publish the update:
```bash
vsce publish patch  # or minor, or major
```

## 📝 Alternative: Publish via Web

1. Package your extension:
```bash
vsce package
```

2. Go to https://marketplace.visualstudio.com/manage
3. Click your publisher name
4. Click "New extension" → "Visual Studio Code"
5. Drag and drop your `.vsix` file
6. Click "Upload"

## 🎯 Post-Publishing Tips

1. **Share on Social Media**: Tweet about it, post on Reddit (r/vscode), share on LinkedIn
2. **Add to GitHub**: Push your code to GitHub and add the marketplace badge to README
3. **Gather Feedback**: Ask users for feedback and iterate
4. **Monitor Analytics**: Check your extension's download stats on the marketplace

## 🐛 Troubleshooting

### "Publisher not found"
- Make sure you've created a publisher account
- Verify the publisher name in package.json matches your account

### "Extension validation failed"
- Run `vsce package` to see specific errors
- Check that all file paths in package.json are correct
- Ensure JSON files are valid

### "Personal Access Token expired"
- Create a new token and login again with `vsce login`

## 📚 Resources

- [VS Code Publishing Guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [Marketplace Publisher Portal](https://marketplace.visualstudio.com/manage)

---

Good luck with your theme! 🌸
