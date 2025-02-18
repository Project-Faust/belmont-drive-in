export const formatCategoryTitle = (str) => {
    return str
        .replace(/([A-Z])/g, " $1") // Add space before capital letters
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize each word
        .trim();
};