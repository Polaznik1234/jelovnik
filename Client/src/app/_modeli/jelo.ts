import { Jelovnik } from "./jelovnik";

export interface Jelo{
    id: number;
    naziv: string;
    opis: number;
    jelovnik?: Jelovnik;
}