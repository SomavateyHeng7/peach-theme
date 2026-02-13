# 📦 Install Soma Theme from GitHub

Since Soma Theme is not yet published on the VS Code Marketplace, you can install it directly from GitHub. Here are three methods:

---

## Method 1: Install via VSIX Package (Recommended)

### Step 1: Package the Extension
In the theme directory, run:
```bash
npm install -g @vscode/vsce
vsce package
```

This creates a file like `soma-theme-1.0.0.vsix`

### Step 2: Install the VSIX
```bash
code --install-extension soma-theme-1.0.0.vsix
```

Or in VS Code:
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Extensions: Install from VSIX"
3. Select the `.vsix` file
4. Reload VS Code

### Step 3: Activate the Theme
1. Press `Ctrl+K Ctrl+T` (or `Cmd+K Cmd+T` on Mac)
2. Select "Soma Dark" or "Soma Light"

---

## Method 2: Copy to Extensions Folder (Quick & Easy)

### Step 1: Clone or Download
```bash
git clone https://github.com/yourusername/soma-theme.git
```
Or download as ZIP and extract.

### Step 2: Copy to VS Code Extensions Folder

**Windows:**
```bash
xcopy soma-theme "%USERPROFILE%\.vscode\extensions\soma-theme-1.0.0" /E /I
```

**macOS/Linux:**
```bash
cp -r soma-theme ~/.vscode/extensions/soma-theme-1.0.0
```

### Step 3: Reload VS Code
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Developer: Reload Window"
3. Press Enter

### Step 4: Activate the Theme
1. Press `Ctrl+K Ctrl+T` (or `Cmd+K Cmd+T` on Mac)
2. Select "Soma Dark" or "Soma Light"

---

## Method 3: Development Mode (For Testing/Contributing)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/soma-theme.git
cd soma-theme
```

### Step 2: Open in VS Code
```bash
code .
```

### Step 3: Run in Development Mode
1. Press `F5` (or Run → Start Debugging)
2. A new VS Code window opens with the theme loaded
3. Press `Ctrl+K Ctrl+T` (or `Cmd+K Cmd+T` on Mac)
4. Select "Soma Dark" or "Soma Light"

This method is perfect for testing changes before installing permanently.

---

## 🎨 Switching Between Themes

Once installed, you can quickly switch themes:

**Keyboard Shortcut:**
- Windows/Linux: `Ctrl+K Ctrl+T`
- Mac: `Cmd+K Cmd+T`

**Via Settings:**
1. `Ctrl+,` (or `Cmd+,` on Mac) to open Settings
2. Search for "Color Theme"
3. Select "Soma Dark" or "Soma Light"

**Via Command Palette:**
1. `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Color Theme"
3. Select your preferred Soma variant

---

## 🔄 Updating the Theme

### If Installed via VSIX:
1. Download the new `.vsix` file
2. Run: `code --install-extension soma-theme-1.0.0.vsix`
3. Reload VS Code

### If Installed via Extensions Folder:
1. Delete the old folder from `~/.vscode/extensions/`
2. Copy the new version
3. Reload VS Code

### If Using Development Mode:
1. `git pull` to get latest changes
2. Reload the development window

---

## 🐛 Troubleshooting

### Theme Not Showing Up?
1. Make sure the folder name includes a version: `soma-theme-1.0.0`
2. Check that `package.json` exists in the root
3. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

### Theme Looks Broken?
1. Verify JSON files are valid:
   ```bash
   python3 -m json.tool themes/soma-dark.json
   python3 -m json.tool themes/soma-light.json
   ```
2. Check VS Code Developer Tools: `Help` → `Toggle Developer Tools`
3. Look for errors in the Console tab

### Can't Find Extensions Folder?
Open it directly from VS Code:
1. `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Extensions: Open Extensions Folder"
3. Press Enter

---

## 📍 Extensions Folder Locations

**Windows:**
```
%USERPROFILE%\.vscode\extensions\
```

**macOS:**
```
~/.vscode/extensions/
```

**Linux:**
```
~/.vscode/extensions/
```

**VS Code Insiders:**
Replace `.vscode` with `.vscode-insiders`

---

## 🎯 Quick Install Script

Save this as `install.sh` (macOS/Linux) or `install.bat` (Windows):

**macOS/Linux:**
```bash
#!/bin/bash
echo "Installing Soma Theme..."
cp -r . ~/.vscode/extensions/soma-theme-1.0.0
echo "✓ Theme installed!"
echo "Now reload VS Code and activate the theme with Ctrl+K Ctrl+T"
```

**Windows:**
```batch
@echo off
echo Installing Soma Theme...
xcopy . "%USERPROFILE%\.vscode\extensions\soma-theme-1.0.0" /E /I /Y
echo Theme installed!
echo Now reload VS Code and activate the theme with Ctrl+K Ctrl+T
pause
```

Run it from the theme directory:
```bash
chmod +x install.sh  # macOS/Linux only
./install.sh         # macOS/Linux
install.bat          # Windows
```

---

## 📦 Sharing with Others

### Option 1: Share the VSIX File
1. Create the VSIX: `vsce package`
2. Share `soma-theme-1.0.0.vsix`
3. Users install with: `code --install-extension soma-theme-1.0.0.vsix`

### Option 2: Share GitHub Link
Users can clone and copy to extensions folder (Method 2 above)

### Option 3: Create a Release
1. Push to GitHub
2. Create a release with the `.vsix` file attached
3. Users download and install

---

## 🌟 After Installation

Don't forget to:
- ⭐ Star the GitHub repo
- 🐛 Report issues
- 💡 Suggest improvements
- 📸 Share screenshots on social media

---

**Need help?** Open an issue on GitHub or check the troubleshooting section above.

Enjoy your beautiful new theme! 🎨✨
