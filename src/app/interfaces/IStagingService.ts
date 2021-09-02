import { ILink } from './ILink';
import { IServiceAttribute } from './IServiceAttribute';

export interface IStagingService {
    id: string;
    type: string;
    links: ILink;
    attributes: IServiceAttribute;
}
