# ALO-diary
This is a hacky way of displaying the contents of multiple markdown(.md) file's on a web page. The webpage assumes all markdown files are located at the directory "entries" and their names are formatted as "yyyy-mm-dd.md". Since there is no way to fetch all content from a repository's directory, we instead try fetching singular files with a predictable naming scheme.

Files before 2023-09-17 are not taken into account.
---
Dependencies:
- [Showdown](https://github.com/showdownjs/showdown) to convert .md files to HTML-tags.


# Q&A
## Why?
Laziness. I wanted a page that automatically updates with new entries added to the repository. 

## Who is this for?
Anyone who needs a quick and dirty way of viewing multiple markdown files.

## I don't like the styling
Change it

## Isn't bombing the repository with requests extremely inefficient
Yes but it was fast to implement

## How do I use it?
Slap your .md-files to the "entries" directory and change the description to your liking. If you use a different naming scheme, you need to update the script in index.html that loops through the directory.
