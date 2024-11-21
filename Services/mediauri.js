const fs = require('fs').promises;
const path = require('path');


const mfile = async (sourcePath) =>{
    const projectDir = path.resolve(__dirname, '..'); // Assuming the root is one directory above
    const fileName = path.basename(sourcePath); // Get the file name (e.g., 'image.jpg')

    // Construct the destination path inside the 'media' folder
    const relativePath = path.posix.join('media', 'images', fileName); // Use forward slashes
    const destinationPath = path.join(projectDir, relativePath); // Full path for copying

    // Ensure the 'media/images' directory exists
    await fs.mkdir(path.dirname(destinationPath), { recursive: true });

    // Copy the file to the 'media/images' directory
    await fs.copyFile(sourcePath, destinationPath);
    return relativePath;
    // console.log(`File copied to ${destinationPath}`);
}

module.exports = { mfile };
