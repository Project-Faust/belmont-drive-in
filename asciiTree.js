const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // For coloring output

// List of folders/files to ignore
const ignoreList = ['.next', 'node_modules', '.git', 'dist', '.env', 'README.md']; // Add any files/folders you want to exclude

function generateTree(dirPath, indent = '') {
    let tree = '';
    const filesAndDirs = fs.readdirSync(dirPath);

    filesAndDirs.forEach((item, index) => {
        const fullPath = path.join(dirPath, item);
        const isLast = index === filesAndDirs.length - 1;

        // Check if the item should be ignored
        if (ignoreList.some(pattern => item.includes(pattern))) {
            return; // Skip this item
        }

        const isDirectory = fs.statSync(fullPath).isDirectory();

        // Add color based on file type
        const itemDisplay = isDirectory
            ? chalk.blue.bold(item) // Folders in blue
            : chalk.green(item); // Files in green

        tree += `${indent}${isLast ? '└── ' : '├── '}${itemDisplay}\n`;

        // Recurse into subdirectories if not ignored
        if (isDirectory) {
            tree += generateTree(fullPath, indent + (isLast ? '    ' : '│   '));
        }
    });

    return tree;
}

// Directory to generate the tree for
const rootDir = '../';
console.log(generateTree(rootDir));
