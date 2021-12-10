function add_server(name,players,slots,ip){
    document.querySelector('#server_list .content').innerHTML += "<div onclick='ue4(\"join\",\""+ ip +"\")'><div><h1>"+ name +"</h1></div><h2>"+ players +"/"+ slots +"</h2></div>"
}

function clear_servers(){
    document.querySelector('#server_list .content').innerHTML = "<div class=\"menu\"><input type=\"text\" on placeholder=\"Search ...\"><i onclick=\"ue4('refresh','')\" class=\"material-icons blue\">autorenew</i></div>";
}