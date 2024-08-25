export const findTheOdd = (data: number[]) => {
    const countArray: { key: number, count: number }[] = [];
    data.forEach(num => {

        const exist = countArray.find(x => x.key === num);
        if (!exist) {
            countArray.push({ key: num, count: 1 });
        } else {
            exist.count++
        }

    })

    return countArray.find(x => x.count % 2 === 1)?.key
};