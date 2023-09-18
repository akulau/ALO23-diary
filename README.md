# ALO-diary
This is a hacky way of displaying the contents of multiple markdown(.md) file's contents on a web page. The webpage assumes all markdown files are located at the directory "entries" and their names are formatted as "yyyy-mm-dd.md". Since there is no way to fetch all content from a repository's directory, we instead try fetching singular files with a predictable naming scheme.

Files before 2023-09-17 are not taken into account.
---
Dependencies:
- [Showdown](https://github.com/showdownjs/showdown) to convert .md files to HTML-tags.
