export const permutations = (text: string) => {
    const result: string[] = [];

    const permute = (arr: string[], m: string[] = []) => {
        if (arr.length === 0 && !result.includes(m.join(''))) {
            result.push(m.join(''));
        } else {
            for (let i = 0; i < arr.length; i++) {
                const current = arr.slice();
                const next = current.splice(i, 1);
                permute(current.slice(), m.concat(next));
            }
        }
    };

    permute(text.split(''));

    return result;
}
