export interface LinkGroup {
    title: string;
    links: string[];
}

// Props cho LinkColumn
export interface LinkColumnProps {
    data: LinkGroup;
}