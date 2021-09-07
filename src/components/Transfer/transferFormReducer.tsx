import validator from "validator";

export type FormError = {
    [key: string]: string;
}

export type TransferForm = {
    amount: string;
    recipient: string;
    error: FormError;
}

export function transferFormReducer(transferFormState: TransferForm, action: {
    type: 'ON_FIELD_UPDATE',
    payload: {
        amount?: string;
        recipient?: string;
    }
} | {
    type: 'VALIDATE',
    payload: { balance?: number }
}): TransferForm {
    switch(action.type) {
        case "ON_FIELD_UPDATE":
            let t = { error: {}, amount: transferFormState.amount, recipient: transferFormState.recipient }
            if (action.payload.amount !== undefined) {
                t.amount = action.payload.amount
            }
            if (action.payload.recipient !== undefined) {
                t.recipient = action.payload.recipient
            }
            return t;
        case "VALIDATE":
            let fError: FormError = {};
            if (!validator.isNumeric(transferFormState.amount))
            { fError.amount = "Invalid Value" }
            if (action.payload.balance && validator.isNumeric(transferFormState.amount) && +transferFormState.amount > action.payload.balance) {
                fError.amount = "Insufficient balance";
            }
            if (!/^0x[a-fA-F0-9]{40}$/.test(transferFormState.recipient))
            { fError.recipient = "Invalid Address" }
            return { ...transferFormState, error: fError };
        default:
            return transferFormState;
    }
}