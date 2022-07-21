function choice(items) {
    let randInd = Math.floor(Math.random() * items.length);
    return items[randInd];
}

function remove(items, item) {
    let index = items.findIndex(element => element === item);
    let removedItem = items.splice(index, 1);
    return removedItem[0] ? removedItem[0] : undefined;
}

export { choice, remove }