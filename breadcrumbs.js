function breadcrumbs(tp) {
    const folders = tp.file.folder(true).split('/');
    let crumbs = '';
	if (folders.length > 1) {
		for (var x = 0; x < folders.length - 1; x++) {
			crumbs = crumbs.concat(`[[${folders[x]}]] » `);
		}
		crumbs = crumbs.concat(`${folders[x]}`);
	} else {
		crumbs = folders[0];
	}	
	return crumbs
}

module.exports = breadcrumbs;
