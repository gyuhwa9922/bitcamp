function Activate_Filter(){
    let data = document.getElementById("i_d").value;
    const us_id = [];
    us_id.push(data);
    
    if(data == ""){
    alert("왜 이름 입력 안했어?");
    return false;
    }
    for(let i = 0; i<us_id.length; i++){
        if(us_id.length!=1){
        if(data == us_id[i]){
            alert("중복 되었습니다.");
            return false;
        }
    }
    }
}