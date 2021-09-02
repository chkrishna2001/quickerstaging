import { ILink } from './ILink';
import { IObjectType } from './IObjectType';

export interface IRelationProvider {
    links: ILink;
    data: IObjectType;
}
