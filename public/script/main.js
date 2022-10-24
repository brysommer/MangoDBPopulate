async function productItems() {
  const el1 = document.querySelector('.main');
  let HTML = '';
  let genreName ='';
  let {data}  = await axios.get('/json');
  console.log(data);
  console.log(Array.isArray(data));
  data.forEach(element => {
    element.genre.forEach(element => {
      console.log(element.genre);
      
      genreName += ' ' + element.genre;
    });
     HTML += `
     <li> ${element.name} </span><br><span> Жанр: ${genreName}</span> </li>
    `;
    genreName =''
  });
  el1.innerHTML = HTML; 
  };
productItems();    