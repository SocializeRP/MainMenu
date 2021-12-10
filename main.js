let last_section = undefined;

function new_section(section){
    if(last_section !== undefined){
        document.getElementById(last_section).style.display="none";
    }
    document.getElementById(section).style.display="flex";

    last_section = section;
}

new_section('main_menu');

function add_server(name,players,slots,ip){
    document.querySelector('#server_list .content').innerHTML += "<div onclick='ue4(\"join\",\""+ ip +"\")'><div><h1>"+ name +"</h1></div><h2>"+ players +"/"+ slots +"</h2></div>"
}