const createContent = (data) =>{
  const content = $('<div class="content"></div>');
  const img = $('<img src="' + data.results[0].picture.large +'"/>');
  const name = $('<div><span>Name : </span><span>' + data.results[0].name.first + ' ' + data.results[0].name.last +'</span></div>');
  const gender = $('<div><span>Gender : </span><span>' + data.results[0].gender +'</span>');
  const city = $('<div><span>City : </span><span>' + data.results[0].location.city +'</span>');
  const street = $('<div><span>Street : </span><span>' + data.results[0].location.street +'</span>');
  const email = $('<div><span>Email : </span><span>' + data.results[0].email +'</span>');
  const cell = $('<div><span>Cell : </span><span>' + data.results[0].cell +'</span>');

  content.append(img);
  content.append(name);
  content.append(gender);
  content.append(city);
  content.append(street);
  content.append(email);
  content.append(cell);
  $('body').append(content);
};



$( _=> {
  $.getJSON('https://randomuser.me/api/?nat=es', (json) =>{
    console.log(json.results);
    createContent(json);
  })
});