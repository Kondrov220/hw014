document.querySelector("input").addEventListener("input", (e)=>{
    fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((data)=>{
        let text = [];
        data.map((country)=>country.name.common).forEach((name)=>{
            if (name.toLowerCase().includes(e.target.value.toLowerCase())) text.push(name);
        });
        if (text.length <= 10 && text.length > 1) {
            const array = [];
            text.forEach((element)=>{
                array.push(`<li>${element}</li>`);
            });
            document.querySelector("ul").innerHTML = array;
        } else text.length = 1;
    });
});

//# sourceMappingURL=hw014.579125c3.js.map
