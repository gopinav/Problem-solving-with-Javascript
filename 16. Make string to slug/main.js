function textToSlug(text) {
    return text
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-');
}

console.log(textToSlug("I am tanvir"));