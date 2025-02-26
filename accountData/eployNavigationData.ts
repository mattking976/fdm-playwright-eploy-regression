export class EployNavigationData {
    static #instance: EployNavigationData;

    private ukGradId: number = 122;
    private UkExForceId: number = 41;
    private UkReturnId: number = 851;
    private GerID: number = 1121;

    constructor() {}

    public static get instace(): EployNavigationData {
        if (!EployNavigationData.#instance) {
            EployNavigationData.#instance = new EployNavigationData();
        }

        return EployNavigationData.#instance;
    }

    public get ukGradVacId(): number {
        return this.ukGradId;
    }

    public get ukExForceVacId(): number {
        return this.UkExForceId;
    }

    public get ukReturnVacId(): number {
        return this.UkReturnId;
    }

    public get gerVacId(): number {
        return this.GerID;
    }
}
