function search_server(){
    let value = document.querySelector('#server_list .content input').value;
    let servers_name = document.querySelectorAll('#server_list .content h1');
    for (let i = 0; i < servers_name.length; i++) {
        if(!servers_name[i].innerHTML.toLowerCase().includes(value.toLowerCase())){
            servers_name[i].parentElement.parentElement.style.display="none"
        }else{
            servers_name[i].parentElement.parentElement.style.display="flex"
        }
    }
}

function clear_search(){
    document.querySelector('#server_list .content input').value = "";
}