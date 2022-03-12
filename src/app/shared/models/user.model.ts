export class User {
  private _id: string;
  private _username: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _token: string;

	constructor(id: string, username: string, password: string, firstName: string, lastName: string, token: string) {
		this._id = id;
		this._username = username;
		this._password = password;
		this._firstName = firstName;
		this._lastName = lastName;
		this._token = token;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Getter token
     * @return {string}
     */
	public get token(): string {
		return this._token;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}

    /**
     * Setter token
     * @param {string} value
     */
	public set token(value: string) {
		this._token = value;
	}

}
