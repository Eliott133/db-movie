export function truncate(string, nb_chars = 30){
    return string.length > nb_chars ? string.substring(0, nb_chars) + '...' : string;
}