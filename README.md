<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-is-git-repo/main/media/is-git-repo.png" alt="Icon of Is Git Repo" width="256" height="256">
  <h1>Is Git Repo</h1>
</div>

<br>

<h4 align="center">
  🐸 Checks if a directory is a local Git repository. 🕶️
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [isGitRepo()](#isgitrepooptions-promiseboolean)
  - [isGitRepoSync()](#isgitreposyncoptions-boolean)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- ⚡ Async & sync checks — verify Git repo status your way
- 📂 Custom directory — point to any folder, not just the current one
- 🛡 Input validation — catches invalid or missing paths early
- 🚫 Existence check — errors if the directory doesn’t exist
- 🖥 Direct Git command — uses git rev-parse for accurate detection
- ✅ Boolean result — simple true/false output for easy logic flow
- 🧩 Error-safe — gracefully handles Git errors without crashing
- 🪶 Lightweight dependency — minimal overhead, fast execution 

<br>
<br>

> ⚠️ **WARNING**
>
> This module requires that the [`git`](https://git-scm.com) executable is installed and available in the system path.
>
> If not, it needs to be installed first.
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/is-git-repo
```

```bash
yarn add @igorskyflyer/is-git-repo
```

```bash
npm i @igorskyflyer/is-git-repo
```

<br>
<br>

## 🤹🏼 API

### `isGitRepo(options?): Promise<boolean>`

*Asynchronously checks if a local directory is a Git repository.*  
 
`options` - Optional object with options:
  - `directory` - Sets the current working directory, otherwise the current directory will be used instead.

<br>

Will throw an error if the passed directory is not valid or does not exist.  

Returns a Boolean indicating whether provided local directory is a Git repository.

---

### `isGitRepoSync(options?): boolean`

*Synchronously checks if a local directory is a Git repository.*  
 
`options` - Optional object with options:
  - `directory` - Sets the current working directory, otherwise the current directory will be used instead.

<br>

Will throw an error if the passed directory is not valid or does not exist.  

Returns a Boolean indicating whether provided local directory is a Git repository.

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { isGitRepoSync } from '@igorskyflyer/is-git-repo'

console.log(isGitRepoSync({ directory: '../my-git-project' })) // true
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-is-git-repo/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-is-git-repo/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/vscode-folderpicker](https://www.npmjs.com/package/@igorskyflyer/vscode-folderpicker)

> _✨ Provides a custom Folder Picker API + UI for Visual Studio Code. 🎨_

<br>

[@igorskyflyer/git-repo-url](https://www.npmjs.com/package/@igorskyflyer/git-repo-url)

> _🌐 Gets the origin URL a local Git repository. 🗺️_

<br>

[@igorskyflyer/is-rootdir](https://www.npmjs.com/package/@igorskyflyer/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igorskyflyer/str-is-in](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igorskyflyer/chars-in-string](https://www.npmjs.com/package/@igorskyflyer/chars-in-string)

> _🪐 Provides ways of testing whether an array of chars is present inside a given String. ☄_


<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
