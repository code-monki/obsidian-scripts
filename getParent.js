// retrieve the parent folder for the current file
function getParent(tp) {
   const folders = tp.file.folder(true).split('/');
   const parent = (folders.length > 1) ? folders.slice(-2)[0] : '/';
   return parent;
}

module.exports = getParent;
