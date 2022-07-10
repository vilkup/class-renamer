const renameClass = (Class, name) => {
	const descriptor = { value: name };
	Object.defineProperty(Class, 'name', descriptor);
	return Class;
};

const copyAndRenameClass = (Class, name) => {
	class CopiedClass extends Class {}
	return renameClass(CopiedClass, name);
};

module.exports = { renameClass, copyAndRenameClass };
