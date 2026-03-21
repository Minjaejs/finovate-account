const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  '#0A2540': '#0F172A', // Navy
  '#425466': '#1E2937', // Text
  '#F6F9FC': '#F8FAFC', // Light BG
  '#635BFF': '#14B8A6', // Accent Teal (Replaces Purple)
  '#00D4FF': '#6366F1', // Secondary Purple (Replaces Cyan)
  '#524BCC': '#22D3B6', // Button Hover Hex
  'rgba(99,91,255': 'rgba(20,184,166' // Shadow fixes
};

// Also fix button CSS variables in index.css
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.jsx') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk(directoryPath);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [key, value] of Object.entries(replacements)) {
    // Escape specific key combinations if needed, but simple split/join works for these hexes
    // Case-sensitive split join
    if (content.includes(key)) {
      content = content.split(key).join(value);
      changed = true;
    }
    // Also handle lowercase hex
    const lowerKey = key.toLowerCase();
    if (key.includes('#') && content.includes(lowerKey) && key !== lowerKey) {
      content = content.split(lowerKey).join(value);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
