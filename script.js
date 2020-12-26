function hex_picker() { 
    let hex_color_codes = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, "1A", "1B", "1C", "1D", 
        "1E", "1F", 20]
    
    let single_hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "A", "B", "C", "D", "E", "F"]
    let hex_picker = ""
    
    for (let i = 6; i > 0; i = i - 2){
    let j = Math.floor(Math.random() * hex_color_codes.length)
    let temp = hex_color_codes[j].toString()
    if(temp.length === 1){
        j = Math.floor(Math.random() * single_hex.length)
        let temp_2 = single_hex[j].toString()
        hex_picker = hex_picker + temp + temp_2
        }
        
    if(temp.length === 2){
        hex_picker = hex_picker + temp 
        }
    }
    return(hex_picker = "#" + hex_picker)
} 

for (let i = 0; i < squares2.length; i++){
    squares2[i].style.background = hex_picker()
    
}
