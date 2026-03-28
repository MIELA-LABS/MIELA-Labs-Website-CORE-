const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Replace colors
appContent = appContent.replace(/#FFB800/g, '#D4AF37');
appContent = appContent.replace(/#FF00E5/g, '#9D4EDD');
appContent = appContent.replace(/#7000FF/g, '#4C1D95');
appContent = appContent.replace(/#030305/g, '#0F0E13');
appContent = appContent.replace(/#0A0A0A/g, '#0F0E13');
appContent = appContent.replace(/bg-black/g, 'bg-[#0F0E13]');
appContent = appContent.replace(/bg-\\[#020202\\]/g, 'bg-[#16141D]');
appContent = appContent.replace(/rgba\(\s*255\s*,\s*184\s*,\s*0/g, 'rgba(212, 175, 55');
appContent = appContent.replace(/rgba\(\s*255\s*,\s*0\s*,\s*229/g, 'rgba(157, 78, 221');
appContent = appContent.replace(/rgba\(\s*112\s*,\s*0\s*,\s*255/g, 'rgba(76, 29, 149');

fs.writeFileSync(appPath, appContent);

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(/#0A0A0A/g, '#0F0E13');
cssContent = cssContent.replace(/#C5A059/g, '#D4AF37');
cssContent = cssContent.replace(/#8B5CF6/g, '#9D4EDD');
cssContent = cssContent.replace(/#14B8A6/g, '#4C1D95');
cssContent = cssContent.replace(/#38BDF8/g, '#0D9488');

fs.writeFileSync(cssPath, cssContent);

console.log('Colors updated successfully.');
