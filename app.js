let showData = (data) =>{
    console.log(data);
}
let fetchUrlWithSerachText = (searchText) =>{
    let url;
    if(searchText.length === 1){
        console.log("seaching by first letter");
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
    }
    else if(searchText.length>1){
        console.log("seaching by name");
        url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    }
    else{
        const messageField = document.getElementById('messages');
        let div = document.createElement('div');
        div.classList.add("bg-danger","p-3","container");
        div.innerHTML = `
        <p class="text-white text-center fw-bold fs-5 text"> Please put a Food name for searching</p>
        `
        messageField.appendChild(div);
    }

    fetch(url)
    .then(respones => respones.json())
    .then(data=> showData(data.meals));
}
document.getElementById('search-button').addEventListener('click',function(){
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    // //let data = fetchUrlWithSerachText(searchText);
    // console.log(data);
    fetchUrlWithSerachText(searchText);

    searchField.value = '';
});