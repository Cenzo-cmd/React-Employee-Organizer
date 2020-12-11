export function sortedUsers(data, dataSetter, ascSortingOrder, orderSetter, column) {

    const sorted = data.sort((a, b) =>
        ascSortingOrder ? a.name[column].localeCompare(b.name[column]) : b.name[column].localeCompare(a.name[column])
    )
    dataSetter([...sorted]);
    orderSetter(!ascSortingOrder);
}
