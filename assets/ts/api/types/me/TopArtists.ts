import { Artist } from "../generell";

export interface TopArtists {
    href: string,
    items: Artist[],
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
}
