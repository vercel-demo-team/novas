import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), '_post');
const i18nDirectory = path.join(process.cwd(), '_i18n');

export function getPageText(lang, page) {
  const page_i18n_path = path.join(i18nDirectory, `${lang}`, 'pages', `${page}.json`);
  const components_i18n_path = path.join(i18nDirectory, `${lang}`, 'components', `components.json`);

  const pageText = JSON.parse(fs.readFileSync(page_i18n_path, 'utf8'));
  const componentsText = JSON.parse(fs.readFileSync(components_i18n_path, 'utf8'));

  return {
    lang,
    ...pageText,
    ...componentsText
  }
}

export function getPost(lang, page) {
  const fullPath = path.join(postsDirectory, `${lang}`, `${page}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  return {
    lang,
    ...matterResult.data
  }
}

