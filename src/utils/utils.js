const convert_text_to_html = text => {
    if(text !== undefined){
        let html = text.replaceAll('\n', '<br>');
        return html
    }  
};

export {convert_text_to_html};