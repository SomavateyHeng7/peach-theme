# 🚀 Soma Theme - Quick Start Guide

## Install from GitHub (3 Steps)

### 1️⃣ Get the Theme
```bash
git clone https://github.com/yourusername/soma-theme.git
cd soma-theme
```

### 2️⃣ Package & Install
```bash
npm install -g @vscode/vsce
vsce package
code --install-extension soma-theme-1.0.0.vsix
```

### 3️⃣ Activate
1. Reload VS Code
2. Press `Ctrl+K Ctrl+T` (Mac: `Cmd+K Cmd+T`)
3. Select "Soma Dark" or "Soma Light"

---

## Alternative: Manual Install

### Copy to Extensions Folder

**Windows:**
```bash
xcopy soma-theme "%USERPROFILE%\.vscode\extensions\soma-theme-1.0.0" /E /I
```

**macOS/Linux:**
```bash
cp -r soma-theme ~/.vscode/extensions/soma-theme-1.0.0
```

Then reload VS Code and activate!

---

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Switch Theme | `Ctrl+K Ctrl+T` | `Cmd+K Cmd+T` |
| Open Settings | `Ctrl+,` | `Cmd+,` |
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Reload Window | `Ctrl+R` | `Cmd+R` |

---

## Troubleshooting

**Theme not showing?**
- Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"
- Check folder name includes version: `soma-theme-1.0.0`

**Need more help?**
See [INSTALL_FROM_GITHUB.md](INSTALL_FROM_GITHUB.md) for detailed instructions.

---

**Enjoy! 🎨**
