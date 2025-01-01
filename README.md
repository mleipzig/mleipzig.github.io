# MLEIPZIG Portfolio Guide

To continue adding content to the site, you only need to edit in these three places.

## `_data/`
Here, you can add your projects and publications. Feel free to add more categories as you wish.

## `_projects/`
After adding projects to _data, make a new `.md` file under _projects with the name of the file the same as the title of your project with lowercase and separated with dashes. 

> [!IMPORTANT]
> Naming is case sensitive! (The project page will reverse search the projects database given the file name)

Make sure to include:
  ```yaml
  ---
  title: This affects the page title and SEO related things.
  ---
  ```

   at the beginning of the file. Unfortunately, this step cannot be automated but will help with SEO. Does not affect content or project data.
## `_posts/`
 * To add posts, follow the naming convention.
 * You may add as many categories and tags as you wish.
 * The `featured` tag will put the post under the featured column.
## `_config.yml/`
Can change site name, contact info, misc site settings.
