export function capitaliseString(str) {
    if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
}