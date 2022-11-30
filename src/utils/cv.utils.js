export const arrayMove = (array, elementId, direction) => {
    const element = array.find((item) => item.id === elementId);
    const elementIndex = array.findIndex((item) => item.id === elementId);

    array.splice(elementIndex, 1);
    array.splice(elementIndex + direction, 0, element);
};
