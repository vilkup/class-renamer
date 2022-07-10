type AnyClass = { new(...args: any[]): any };

export function renameClass(Class: AnyClass, name: string);
export function copyAndRenameClass(Class: AnyClass, name: string);
