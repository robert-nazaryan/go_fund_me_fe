export const imageUrl = (url?: string) => {
    if (!url) return '';

    if (url.startsWith('http')) return url;

    if (url.startsWith('https//')) {
        return url.replace('https//', 'https://');
    }

    return url;
};