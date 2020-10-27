function choice(items){
    // will return random items
    let idx = Math.floor(Math.random() * items.lenght);
    return items[idx];
}

function remove(items, item){
    // will loop all items
    // idx = index
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            // 0 to i or all items
            return [...items.slice(0,i), ...items.slice(i+1)];
        }
    }
}

// ...SPREAD parameter for not need to add 
// every number in an array..
export {choice, remove};