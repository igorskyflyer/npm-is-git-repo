<h1 align="center">Is Git repo?</h1>

<br>

<div align="center">
  🐸 Checks if a directory is a local Git repository. 🕶️
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [isGitRepo()](#isgitrepooptions-promiseboolean)
  - [isGitRepoSync()](#isgitreposyncoptions-boolean)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🔍 checks if a directory is a Git repo
- ⌚ both async and sync methods supported
- 👽 cross-platform
- ⚖️ lightweight

---

## 🕵🏼 Usage

> [!WARNING]
> This module requires that the [`git`](https://git-scm.com) executable is installed and available in the system path.
>
> If not, it needs to be installed first.
>

<br>

Install the module by executing:

```shell
npm i '@igor.dvlpr/is-git-repo'
```

---

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

---

## ✨ Examples

`example.mts`
```ts
import { isGitRepoSync } from '@igor.dvlpr/is-git-repo'

console.log(isGitRepoSync({ directory: '../my-git-project' })) // true
```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-is-git-repo/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-is-git-repo/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/vscode-folderpicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker)

> _✨ Provides a custom Folder Picker API + UI for Visual Studio Code. 🎨_

<br>

[@igor.dvlpr/git-repo-url](https://www.npmjs.com/package/@igor.dvlpr/git-repo-url)

> _🌐 Gets the origin URL a local Git repository. 🗺️_

<br>

[@igor.dvlpr/is-rootdir](https://www.npmjs.com/package/@igor.dvlpr/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igor.dvlpr/str-is-in](https://www.npmjs.com/package/@igor.dvlpr/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igor.dvlpr/chars-in-string](https://www.npmjs.com/package/@igor.dvlpr/chars-in-string)

> _🪐 Provides ways of testing whether an array of chars is present inside a given String. ☄_

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
