# Peach Theme

Peach is a beautifully crafted VS Code theme designed for developers who want a workspace that feels calm, modern, and inspiring. Blending warm creams, soft blush tones, and elegant lavenders, it delivers a distinctive pastel aesthetic without sacrificing clarity or readability.

## 🎨 Features

- **Three Variants**: Dark, Light, and Night (High Contrast) modes
- **Night Mode**: Perfect for late-night coding with high contrast and reduced eye strain
- **Language Optimized**: Carefully tuned for Python, TypeScript, JavaScript, and Laravel
- **Pastel Aesthetic**: Warm creams, soft blush tones, and elegant lavenders
- **Developer-Friendly**: Clean syntax contrast and low-fatigue coding experience
- **Modern & Calm**: A refreshing alternative to typical dark blues and neon palettes
- **Enhanced Visibility**: Improved contrast for variables and functions in all modes

## 📦 Installation

### From GitHub (Pre-Release)

Since Peach is not yet on the VS Code Marketplace, you can install it directly:

#### Quick Install (Recommended)
1. Download or clone this repository:
   ```bash
   git clone https://github.com/SomavateyHeng7/peach-theme.git
   cd peach-theme
   ```
2. Package and install:
   ```bash
   npm install -g @vscode/vsce
   vsce package
   code --install-extension soma-theme-1.0.0.vsix
   ```
3. Reload VS Code
4. Press `Ctrl+K Ctrl+T` (or `Cmd+K Cmd+T` on Mac)
5. Select "Soma Dark" or "Soma Light"

#### Manual Install
1. Clone the repository:
   ```bash
   git clone https://github.com/SomavateyHeng7/peach-theme.git
   ```
2. Copy the folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\soma-theme-1.0.0`
   - **macOS/Linux**: `~/.vscode/extensions/soma-theme-1.0.0`
3. Reload VS Code (`Ctrl+Shift+P` → "Developer: Reload Window")
4. Activate: `Ctrl+K Ctrl+T` → Select "Soma Dark" or "Soma Light"

**📖 Detailed installation guide**: See [INSTALL_FROM_GITHUB.md](INSTALL_FROM_GITHUB.md)

### From Marketplace (Coming Soon)
Once published, you'll be able to install via:
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Soma"
4. Click Install

## 🌈 Color Palette

### Dark Theme (Improved Contrast)
- Background: Deep purple-black (#0d0a12)
- Foreground: Bright warm cream (#f0e8e0)
- Variables: Enhanced visibility (#f5e5d5)
- Functions: Bright lavender (#d9c5e9)
- Accent: Soft lavender (#c9b5d9)
- Strings: Gentle green (#d9e4b8)
- Keywords: Muted lavender (#c9b5d9)
- Numbers: Peachy cream (#f4c5a6)
- Tags: Blush pink (#ff6b9d)

### Light Theme (Improved Contrast)
- Background: Warm cream (#fefdfb)
- Foreground: Deep purple-gray (#3a2f42)
- Variables: High contrast dark (#2a1f32)
- Functions: Rich purple (#6a4f7a)
- Accent: Rich lavender (#7a5f8a)
- Strings: Earthy green (#7a8a5a)
- Keywords: Muted purple (#7a5f8a)
- Numbers: Warm terracotta (#c9855a)
- Tags: Rose pink (#b9608a)

### Night Theme (High Contrast)
- Background: True black (#0b0a0f)
- Foreground: Bright cream (#f5f0e8)
- Variables: Maximum visibility (#fff8f0)
- Functions: Bright lavender (#e9d5f9)
- Accent: Vibrant lavender (#d9c5e9)
- Strings: Bright green (#e9f4c8)
- Keywords: Bright purple (#e9c5f9)
- Numbers: Bright peach (#ffd5b6)
- Tags: Bright pink (#ff7aa3)
- Perfect for: Late-night coding, reduced eye strain, maximum readability

## 💻 Language Support

Soma is optimized for:
- **Python**: Beautiful decorator highlighting, clear self/cls distinction
- **TypeScript/JavaScript**: Elegant function and class styling, clear this/super highlighting
- **Laravel/PHP**: Blade template support, namespace clarity, magic methods, arrow functions
- **C/C++**: Preprocessor directives, namespace resolution, pointer/reference operators
- **C#**: Attribute styling, LINQ keywords, async/await highlighting, property distinction
- **Go**: Package/import clarity, defer/go/chan keywords, struct/interface styling
- **R**: Function calls, pipe operators, assignment operators, data structure highlighting
- **Dart/Flutter**: Widget class highlighting, async/await, annotations, named parameters
- **Swift**: Property wrappers, protocols, guard/defer keywords, optional chaining
- **Java**: Annotations, generics, lambda expressions, package imports
- **Ruby**: Symbol highlighting, instance/class variables, interpolation, block parameters
- **SQL**: Bold keywords, function highlighting, table/column distinction
- **HTML/CSS**: Tag and selector styling, class/ID distinction, pseudo-classes, CSS variables
- **JSON**: Multi-level key coloring for easy navigation
- **Markdown**: Beautiful heading and emphasis styling

## 📸 Screenshots

*Coming soon*

## 🤝 Contributing

Found a bug or have a suggestion? Please open an issue on GitHub!

## 📄 License

MIT

---

**Enjoy coding with Soma!** 🌸
