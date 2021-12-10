let last_section = undefined;

function new_section(section){
    if(last_section !== undefined){
        document.getElementById(last_section).style.display="none";
    }
    document.getElementById(section).style.display="flex";

    last_section = section;
}

new_section('main_menu');