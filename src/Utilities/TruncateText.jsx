export const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
        return words.slice(0, 20).join(' ') + '...';
    }
    return description;
};
