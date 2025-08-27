// postbuild.js
import fs from 'fs';
import path from 'path';

const dist = path.resolve('./dist');

try {
  fs.unlinkSync(path.join(dist, 'sitemap-index.xml')); // remove file
  fs.renameSync(
    path.join(dist, 'sitemap-0.xml'),
    path.join(dist, 'sitemap.xml')
  ); // rename file
  console.log('Sitemap rename completed.');
} catch (err) {
  console.error(err);
}
