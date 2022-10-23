async function productItems() {
    const el1 = document.querySelector('.main');
    let HTML = '';
    let {data}  = await axios.get('/json');
    console.log(data);
    console.log(Array.isArray(data));
    data.forEach(element => {
       HTML += `
       <li> ${element.name} </span><span> Genre: ${element.genre.genre}</span> </li>>


      `;
    });
    el1.innerHTML = HTML; 
    };
productItems();    