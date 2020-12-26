function hex_picker() { 
    let hex_picker = ""
    let hex_color_codes = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        "A", "B", "C", "D", "E", "F", "1A", "1B", "1C", "1D", "1E", "1F", 20]
    
    let single_hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "A", "B", "C", "D", "E", "F"]
    
    for (let i = 6; i > 0; i -= 2){
        let j = Math.floor(Math.random() * hex_color_codes.length)
        let color = hex_color_codes[j].toString()
        if(color.length === 1){
            j = Math.floor(Math.random() * single_hex.length)
            let color_two = single_hex[j].toString()
            hex_picker = hex_picker + color + color_two
        }
    if(temp.length === 2){
        hex_picker = hex_picker + color
       }
    }
    return(hex_picker = "#" + hex_picker)
} 
