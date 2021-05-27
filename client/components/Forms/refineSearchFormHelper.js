export default function stringMaker (form, include) {
  const tempArray = ['?']
  const queryOption = include ? '&region=' : '&exclude='
  let x = ''
  if ((!form.north || !form.south)) {
    form.north && tempArray.push('&island=north')
    form.south && tempArray.push('&island=south')
  }
  // form.Northland && tempArray.push('&exclude=Northland')
  // form.Auckland && tempArray.push('&exclude=Auckland')
  // form['Bay of Plenty'] && tempArray.push('&exclude=Bay of Plenty')
  // form.Waikato && tempArray.push('&exclude=Waikato')
  // form.Gisborne && tempArray.push('&exclude=Gisborne')
  // form.Taranaki && tempArray.push('&exclude=Taranaki')
  // form['Hawkes Bay'] && tempArray.push('&exclude=Hawkes Bay')
  // form['Whanganui - Manawatu'] && tempArray.push('&exclude=Whanganui - Manawatu')
  // form.Wellington && tempArray.push('&exclude=Wellington')
  // form.Nelson && tempArray.push('&exclude=Nelson')
  // form.Marlborough && tempArray.push('&exclude=Marlborough')
  // form.Canterbury && tempArray.push('&exclude=Canterbury')
  // form['West Coast'] && tempArray.push('&exclude=West Coast')
  // form.Otago && tempArray.push('&exclude=Otago')
  // form.Southland && tempArray.push('&exclude=Southland')
  // form.available && tempArray.push('&available=2')

  form.Northland && tempArray.push(queryOption + 'Northland')
  form.Auckland && tempArray.push(queryOption + 'Auckland')
  form['Bay of Plenty'] && tempArray.push(queryOption + 'Bay of Plenty')
  form.Waikato && tempArray.push(queryOption + 'Waikato')
  form.Gisborne && tempArray.push(queryOption + 'Gisborne')
  form.Taranaki && tempArray.push(queryOption + 'Taranaki')
  form['Hawke\'s Bay'] && tempArray.push(queryOption + 'Hawke\'s Bay')
  form['Whanganui - Manawatu'] && tempArray.push(queryOption + 'Whanganui - Manawatu')
  form.Wellington && tempArray.push(queryOption + 'Wellington')
  form.Nelson && tempArray.push(queryOption + 'Nelson')
  form.Marlborough && tempArray.push(queryOption + 'Marlborough')
  form.Canterbury && tempArray.push(queryOption + 'Canterbury')
  form['West Coast'] && tempArray.push(queryOption + 'West Coast')
  form.Otago && tempArray.push(queryOption + 'Otago')
  form.Southland && tempArray.push(queryOption + 'Southland')
  form.available ? tempArray.push('&available=2') : tempArray.push('&available=1')
  x = tempArray.join('')
  console.log(form['Hawke\'s Bay'])
  return x
}
