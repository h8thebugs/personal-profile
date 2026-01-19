import * as path from 'node:path'
import * as fs from 'node:fs'
import {fileURLToPath} from 'node:url';
import {create} from "xmlbuilder2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const domain = 'https://jakabszilard.work';
const routesDefinition = path.join(__dirname, 'src', 'app', 'app.routes.ts');
const pathRegex = /path:\s*['"]([^'":*]+)['"]/g;
try {
  const routesFileContent = fs.readFileSync(routesDefinition, 'utf8');
  const paths = [];
  let match;
  while ((match = pathRegex.exec(routesFileContent)) !== null && match[1]) {
    paths.push(match[1]);
  }
  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });
  root.ele('url').ele('loc').txt(domain).up().up();
  paths.forEach(routePath => {
    const url = root.ele('url');
    url.ele('loc').txt(`${domain}/${routePath}`);
  });
  const xml = root.end({ prettyPrint: true });
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml, 'utf8')
} catch (e) {
  console.error('Could not generate sitemap: ', e);
}
