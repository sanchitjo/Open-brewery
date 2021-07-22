async function postData(){
    try {
        console.log("search")
        var query = document.getElementById("query").value;
        
        console.log(query);
        var postinfo = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
        var resInfo = await postinfo.json();
        console.log(resInfo);
        resInfo.forEach(row => {
            var tr = document.createElement("tr");
            var nameTd = document.createElement("td");
            var brewery_typeTd = document.createElement("td");
            var cityTd = document.createElement("td");
            var website_urlTd = document.createElement("td");
            var phoneTd = document.createElement("td");



            nameTd.innerText = row.name;
            brewery_typeTd.innerText = row.brewery_type;
            cityTd.innerText = row.city;
            website_urlTd.innerText = row.website_url;
            phoneTd.innerText = row.phone;



            tr.appendChild(nameTd);
            tr.appendChild(brewery_typeTd);
            tr.appendChild(cityTd);
            tr.appendChild(website_urlTd);
            tr.appendChild(phoneTd);


            document.getElementById("table").appendChild(tr);
        });
    } catch (error) {
        console.log(error)
    }
}



async function getData() {
    try {
        var data = await fetch("https://api.openbrewerydb.org/breweries");
        var resp = await data.json()
        //console.log(resp);
        document.getElementById("table").innerText=""
        resp.forEach(row => {
            var tr = document.createElement("tr");
            var nameTd = document.createElement("td");
            var brewery_typeTd = document.createElement("td");
            var cityTd = document.createElement("td");
            var website_urlTd = document.createElement("td");
            var phoneTd = document.createElement("td");



            nameTd.innerText = row.name;
            brewery_typeTd.innerText = row.brewery_type;
            cityTd.innerText = row.city;
            website_urlTd.innerText = row.website_url;
            phoneTd.innerText = row.phone;



            tr.appendChild(nameTd);
            tr.appendChild(brewery_typeTd);
            tr.appendChild(cityTd);
            tr.appendChild(website_urlTd);
            tr.appendChild(phoneTd);


            document.getElementById("table").appendChild(tr);
        });
    } catch (error) {
        console.log(error);
    }

}


var search = () => {
    console.log("search is clicked")
}