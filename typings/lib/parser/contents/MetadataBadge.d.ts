export = MetadataBadge;
declare class MetadataBadge {
    constructor(item: any);
    type: string;
    style: any;
    label: any;
    non_abbreviated_label: any;
    /**
     * Get label as string
     * @returns {string}
     */
    toString(): string;
}
