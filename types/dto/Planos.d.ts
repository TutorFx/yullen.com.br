interface PlanoTranslation {
    languages_code: string;
    title: string;
    description: string | null;
    features: string[] | null;
    price: number | null;
    online: boolean;
}

interface Plano {
    variant: string;
    slug: string;
    periodicity: string;
    featured: boolean;
    translations: PlanoTranslation[];
}

interface PlanosQuery {
    plans: Plano[]
}