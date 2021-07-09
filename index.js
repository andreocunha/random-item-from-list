function randomItemList(list) {
    if(!list){
        return null;
    }
    let tam = list.length

    if(tam <= 0) {
        return null;
    }

    let pos = Math.floor(Math.random() * tam);

    return list[pos];
}

module.exports = randomItemList