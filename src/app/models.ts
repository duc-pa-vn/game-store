export interface Game {
    background_image: string,
    name: string,
    id: string
    released: string,
    metacritic_url: string,
    website: string,
    description: string,
    metacritic: number,
    genres: Array<Genre>,
    parent_platforms: Array<ParentPlatforms>,
    publishers: Array<Publishers>,
    ratings: Array<Rating>,
    screenshots: Array<Screenshots>,
    trailers: Array<Trailers>
}

export interface APIResponse<T> {
    results: Array<T>
}

interface Genre {
    name: string
}

interface ParentPlatforms {
    platform: {
        id: number,
        name: string,
        slug: string
    }
}

interface Publishers {
    name: string
}

interface Rating {
    id: number,
    count: number,
    title: string
}

interface Screenshots {
    image: string
}

interface Trailers {
    data: {
        max: string
    }
}
