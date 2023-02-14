// Get the grandparent folder of the current file
function getGrandParent(tp) {
   const folders = tp.file.folder(true).split('/');
   const grandParent = (folders.length > 1) ? folders.slice(-3)[0] : '/';
   return grandParent;
}

module.exports = getGrandParent;
