export const countSmile = (data: string[]) => {
    let countSmile: number = 0;

    for (let index = 0; index < data.length; index++) {
        let isValidSmileFace = true;
        const face = data[index];
        const spiltFace = face.split('');
        const len = spiltFace.length;

        if (![':', ';'].includes(spiltFace[0])) {
            isValidSmileFace = false;
            continue;
        }


        if (!['D', ')'].includes(spiltFace[len - 1])) {
            isValidSmileFace = false;
            continue;
        }


        if (len === 3 && !['-', '~'].includes(spiltFace[1])) {
            isValidSmileFace = false;
            continue;
        }

        countSmile++;
    }
    return countSmile;
};

