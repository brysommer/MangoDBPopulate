async function productItems() {
  const el1 = document.querySelector('.main');
  let HTML = '';
  let genreName ='';
  let commentContent = '';
  let {data}  = await axios.get('/json');
  console.log(data);
  console.log(Array.isArray(data));
  data.forEach(element => {
    element.comments.forEach(element => {
      console.log(element.content);
      
      commentContent += `<li>${element.content}</li>`;
    });
    element.genre.forEach(element => {
      console.log(element.genre);
      
      genreName += ' ' + element.genre;
    });
     HTML += `
     <li> ${element.name} </span><br><span> Жанр: ${genreName}</span><br><span>Коментарі:<span> <p><ol> ${commentContent}</ol></p> </li>
    `;
    genreName ='';
    commentContent = '';
  });
  el1.innerHTML = HTML; 
  };
productItems();    