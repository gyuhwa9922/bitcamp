function Activate_Filter(){
    //let data = document.getElementById("i_d").value;
    //const us_id = [];
    const game = [['q','w','e','r','hi'],
                ['a','s','d','f','hello'],
                ['z','x','c','v','good']];
    let see = document.getElementById("i_d").value;
    for(let i =0; i<game.length; i++){
    if(game[i][1] == see){
        document.write("찾음");
        return false;
    }else{
        document.write("없는데?");
        return false;}
}
}