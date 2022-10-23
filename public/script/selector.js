async function productItems() {
    const el1 = document.querySelector('.select');
    let HTML = '';
    let {data}  = await axios.get('/genre');
    console.log(data);
    console.log(Array.isArray(data));
    data.forEach(element => {
       HTML += `
        <option value="${element._id}">${element.genre}</option>

      `;
    });
    el1.innerHTML = HTML; 
    };
productItems();    

async function getBooknames() {
    const el2 = document.querySelector('.book');
    let HTML = '';
    let {data}  = await axios.get('/comment');
    console.log(data);
    console.log(Array.isArray(data));
    data.forEach(element => {
       HTML += `
        <option value="${element._id}">${element.name}</option>

      `;
    });
    el2.innerHTML = HTML; 
    };
getBooknames();  