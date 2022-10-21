document.querySelector('.btn').addEventListener('click', () => {
  event.preventDefault();
  let name = document.querySelector('.input_name').value;
  let height = document.querySelector('.input_height').value;
  let weight = document.querySelector('.input_weight').value;
  console.log(name);
  console.log(height);
  console.log(weight);

})


