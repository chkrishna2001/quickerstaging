export interface IResponse<T, K> {
    data: T[];
    included?: K[];
    meta: IMeta;

}
export interface IMeta {
    'record-count': number;
}
