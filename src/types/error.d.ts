export class ExtendedError extends Error {
    status: number;
    constructor(status: number) {
        super();
        this.status = status;
    }
}
