export class LocalStorageObj {
    key: string;
    value: any;
}

export class LocalStorageAccount extends LocalStorageObj {
    key: string = "LocalStorageAccount";
    value: {
        account: string;
        password: string;
    }
}