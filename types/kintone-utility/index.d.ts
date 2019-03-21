// Type definitions for kintone-utility 0.4
// Project: https://github.com/kintone/kintoneUtility
// Definitions by: TAKAHASHI Shuuji <https://github.com/shuuji3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/kintone-utility
// TypeScript Version: 2.2

export namespace rest {
    interface File {
        type: string;
        url?: string;
        file?: { fileKey: string };
    }

    function deleteAllRecords(params: { app: number; ids: ReadonlyArray<number>; isGuest?: boolean }): Promise<object>;

    function deleteAllRecordsByQuery(params: { app: number; query?: string; isGuest?: boolean }): Promise<object>;

    function deleteRecords(params: { app: number; ids: ReadonlyArray<number>; revisions?: ReadonlyArray<number>; isGuest?: boolean }): Promise<object>;

    function downloadFile(params: { fileKey: string; isGuest?: boolean }): Promise<object>;

    function getAllRecordsByQuery(params: {
        app: number;
        query?: string;
        fields?: ReadonlyArray<string>;
        isGuest?: boolean;
    }): Promise<object>;

    function getAppDeployStatus(params: { apps: ReadonlyArray<number>; isGuest?: boolean }): Promise<object>;

    function getCustomization(params: { app: number; isPreview?: boolean; isGuest?: boolean }): Promise<object>;

    function getFormFields(params: { app: number; lang?: string; isGuest?: boolean; isPreview?: boolean }): Promise<object>;

    function getFormLayout(params: { app: number; isGuest?: boolean; isPreview?: boolean }): Promise<object>;

    function getRecord(params: { app: number; id: number; isGuest?: boolean }): Promise<object>;

    function getRecords(params: {
        app: number;
        query?: string;
        fields?: ReadonlyArray<string>;
        totalCount?: boolean;
        isGuest?: boolean;
    }): Promise<object>;

    function postAllRecords(params: { app: number; records: ReadonlyArray<object>; isGuest?: boolean }): Promise<object>;

    function postDeployAppSettings(params: {
        apps: Array<{ app: number; revision?: number }>;
        revert?: boolean;
        isGuest?: boolean;
    }): Promise<object>;

    function postRecord(params: { app: number; record?: object; isGuest?: boolean }): Promise<object>;

    function postRecords(params: { app: number; records: ReadonlyArray<object>; isGuest?: boolean }): Promise<object>;

    function putAllRecords(params: { app: number; records: ReadonlyArray<object>; isGuest?: boolean }): Promise<object>;

    function putRecord(params: {
        app: number;
        id?: number;
        updateKey?: {
            field: string;
            value: string;
        };
        revision?: number;
        record?: object;
        isGuest?: boolean;
    }): Promise<object>;

    function putRecords(params: { app: number; records: ReadonlyArray<object>; isGuest?: boolean }): Promise<object>;

    function setApiTokenAuth(apiToken: string): void;

    function setBasicAuth(userName: string, password: string): void;

    function setDomain(domain: string): void;

    function setGuestSpaceId(guestSpaceId: number): void;

    function setUserAuth(loginName: string, password: string): void;

    function updateCustomization(params: {
        app: number;
        scope?: string;
        desktop?: {
            js?: ReadonlyArray<File>;
            ccs?: ReadonlyArray<File>;
        };
        mobile?: {
            js?: ReadonlyArray<File>;
        };
        revision?: number;
        isGuest?: boolean;
    }): Promise<object>;

    function uploadFile(params: { fileName: string; blob: object; isGuest?: boolean }): Promise<object>;

    function upsertRecord(params: {
        app: number;
        updateKey: {
            field: string;
            value: string;
        };
        record: object;
        isGuest?: boolean;
    }): Promise<object>;

    function upsertRecords(params: { app: number; records: ReadonlyArray<object>; isGuest?: boolean }): Promise<object>;
}
