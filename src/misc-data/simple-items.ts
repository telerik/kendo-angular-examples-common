export function getItems(numberOfItems: number, itemName: string = 'Item'): string[] {
    return Array(numberOfItems + 1).fill(itemName + ' ').map((item, index) => item + index).slice(1, numberOfItems + 1);
}

export function getItemsZeroBased(numberOfItems: number, itemName: string = 'Item'): string[] {
    return Array(numberOfItems).fill(itemName + ' ').map((item, index) => item + index);
}
