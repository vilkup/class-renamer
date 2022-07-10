const { renameClass, copyAndRenameClass } = require('.');

describe('Renaming class by reference', () => {
	it('Renames a class declared with class syntax', () => {
		class User {
			constructor(name) {
				this.name = name;
			}
		}
		renameClass(User, 'Admin');
		const { value: className } = Object.getOwnPropertyDescriptor(User, 'name');
		expect(className).toEqual('Admin');
	});

	it('Renames a class declared with function constructor syntax', () => {
		function User(name) {
			this.name = name;
		}

		renameClass(User, 'Admin');
		const { value: className } = Object.getOwnPropertyDescriptor(User, 'name');
		expect(className).toEqual('Admin');
	});
});

describe('Renaming copied class', () => {
	it('Renames a class declared with class syntax', () => {
		class User {
			constructor(name) {
				this.name = name;
			}
		}

		const Admin = copyAndRenameClass(User, 'Admin');
		const { value: userClassName } = Object.getOwnPropertyDescriptor(User, 'name');
		const { value: adminClassName } = Object.getOwnPropertyDescriptor(Admin, 'name');

		expect(userClassName).toEqual('User');
		expect(adminClassName).toEqual('Admin');
	});

	it('Renames a class declared with function constructor syntax', () => {
		function User(name) {
			this.name = name;
		}

		const Admin = copyAndRenameClass(User, 'Admin');
		const { value: userClassName } = Object.getOwnPropertyDescriptor(User, 'name');
		const { value: adminClassName } = Object.getOwnPropertyDescriptor(Admin, 'name');

		expect(userClassName).toEqual('User');
		expect(adminClassName).toEqual('Admin');
	});
});
