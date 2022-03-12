import { AlertType } from "./alertType.model";

export class Alert {
  private _id!: string;
  private _type!: AlertType;
  private _message!: string;
  private _autoClose!: boolean;
  private _keepAfterRouteChange!: boolean;
  private _fade!: boolean;

  constructor(init?:Partial<Alert>) {
      Object.assign(this, init);
  }
    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter type
     * @return {AlertType}
     */
	public get type(): AlertType {
		return this._type;
	}

    /**
     * Getter message
     * @return {string}
     */
	public get message(): string {
		return this._message;
	}

    /**
     * Getter autoClose
     * @return {boolean}
     */
	public get autoClose(): boolean {
		return this._autoClose;
	}

    /**
     * Getter keepAfterRouteChange
     * @return {boolean}
     */
	public get keepAfterRouteChange(): boolean {
		return this._keepAfterRouteChange;
	}

    /**
     * Getter fade
     * @return {boolean}
     */
	public get fade(): boolean {
		return this._fade;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter type
     * @param {AlertType} value
     */
	public set type(value: AlertType) {
		this._type = value;
	}

    /**
     * Setter message
     * @param {string} value
     */
	public set message(value: string) {
		this._message = value;
	}

    /**
     * Setter autoClose
     * @param {boolean} value
     */
	public set autoClose(value: boolean) {
		this._autoClose = value;
	}

    /**
     * Setter keepAfterRouteChange
     * @param {boolean} value
     */
	public set keepAfterRouteChange(value: boolean) {
		this._keepAfterRouteChange = value;
	}

    /**
     * Setter fade
     * @param {boolean} value
     */
	public set fade(value: boolean) {
		this._fade = value;
	}

}
