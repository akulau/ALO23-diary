# Multi Markdown Viewer
This is a hacky way of displaying the contents of multiple markdown(```.md```) files on a web page. The webpage assumes the markdown files (except the description) are located at the "content_directory" specified in the ```_config.yml``` and their names are formatted as "yyyy-mm-dd.md". Since there is no way to fetch all content from a repository's directory, we instead try fetching singular files with a predictable naming scheme.


---
Dependencies:
- [Showdown](https://github.com/showdownjs/showdown) to convert ```.md``` files to HTML-tags.


# Q&A
## Why?
Laziness. I wanted a page that automatically updates with new entries added to the repository. 

## Who is this for?
Anyone who needs a quick and dirty way of viewing multiple markdown files.

## I don't like the styling
Change it. It's all in the ```style.css``` file.

## Isn't bombing the repository with requests extremely inefficient
Yes but it was fast to implement

## How do I use it?
Slap your ```.md```-files to the "entries" directory and change the description to your liking. Update the ```_config.yml``` values to suit your needs. They are pretty self explanitory. If you use a different naming scheme, you need to update the script in ```script.js``` that loops through the directory. By default, the script scans the content directory from the start_date to end_date. If either one is omitted, both values default to the current date. For example, to look for all files after, set the start_date to 2023-09-26 and remove the end_date completely. Remember, however, that if the start date is far in the past, the script checks every day until the current date. 
