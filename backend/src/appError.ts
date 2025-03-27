class AppError extends Error {
    public statusCode: number; // Change 'status' to 'statusCode'

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export default AppError;
