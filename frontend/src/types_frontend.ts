export interface Ad {
    id: number;
    titre: string;
    prix: number;
    picpath: string;
    tags: Tag[]
    categorie: Category
    description: string
    location: string
}


export interface AdInput {
    titre: string
    prix: number
    picpath: string
    tags: { id: number }[]
    categorie: { id: number }
    description: string
    location: string
}

export interface Category {
    id: number
    nom: string
}

export interface Tag {
    id: number
    nom: string
}
