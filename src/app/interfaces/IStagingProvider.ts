import { ILink } from './ILink';
import { IProviderAttribute } from './IProviderAttribute';
import { IRelationship } from './IRelationship';

export interface IStagingProvider<AttributeType> {
    id: string;
    type: string;
    links: ILink;
    attributes: AttributeType;
    relationships: IRelationship;
}
