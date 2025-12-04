export interface Ad {
    id: number;
    titre: string;
    prix: number;
    picpath: string;
    tags: Tag[]
    category: Category
    description: string
    location: string
}

export interface Category {
    id: number
    name: string
}

export interface Tag {
    id: number
    name: string
}
