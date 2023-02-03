function trim(str, size) {
    if(str.length<=size)return str
    if(size<=3)return str.substring(0, size) + "...";
    if (str.length>3) {
        return str.substring(0, size - 3) + "...";
    }else if(str.length<=3){
        return str.substring(0, size) + "...";
    }

}