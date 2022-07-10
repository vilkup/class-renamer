type Constructor<T> = new(...args: any[]) => T;

/**
 * Renames a class by reference and returns it
 * @param {Constructor<T>} Class
 * @param {string} name
 * @returns {Constructor<T>}
 */
export function renameClass<T>(Class: Constructor<T>, name: string): Constructor<T>;

/**
 * Creates a class that extends given class and returns renamed copy
 * @param {Constructor<T>} Class
 * @param {string} name
 * @returns {Constructor<T>}
 */
export function copyAndRenameClass<T>(Class: Constructor<T>, name: string): Constructor<T>;
