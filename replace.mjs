import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace names
  content = content.replace(/Dental Signature GH/g, 'LifeDent');
  content = content.replace(/Dental Signature/g, 'LifeDent');

  // Replace buttons
  let updatedButton = false;
  content = content.replace(/<a href="tel:0535516633"([^>]*)className="about-btn"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, inner) => {
    updatedButton = true;
    return `<Link to="/booking"${p1}className="about-btn"${p2}>${inner}</Link>`;
  });

  if (updatedButton && !content.includes("from 'react-router-dom'") && !content.includes('from "react-router-dom"')) {
    // Inject at the top, after the import React line or just at the very top.
    content = "import { Link } from 'react-router-dom';\n" + content;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      traverse(full);
    } else if (full.endsWith('.jsx')) {
      replaceInFile(full);
    }
  }
}

traverse('src');
console.log("Done");
