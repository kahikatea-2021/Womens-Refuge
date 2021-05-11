export default function stringMaker (form) {
  const tempArray = ['?']
  let x = ''
  form.north && tempArray.push('&island=north')
  form.south && tempArray.push('&island=south')
  form.Northland && tempArray.push('&exclude=Northland')
  form.Auckland && tempArray.push('&exclude=Auckland')
  form['Bay of Plenty'] && tempArray.push('&exclude=Bay of Plenty')
  form.Waikato && tempArray.push('&exclude=Waikato')
  form.Gisborne && tempArray.push('&exclude=Gisborne')
  form.Taranaki && tempArray.push('&exclude=Taranaki')
  form['Hawkes Bay'] && tempArray.push('&exclude=Hawkes Bay')
  form['Whanganui - Manawatu'] && tempArray.push('&exclude=Whanganui - Manawatu')
  form.Wellington && tempArray.push('&exclude=Wellington')
  form.Nelson && tempArray.push('&exclude=Nelson')
  form.Marlborough && tempArray.push('&exclude=Marlborough')
  form.Canterbury && tempArray.push('&exclude=Canterbury')
  form['West Coast'] && tempArray.push('&exclude=West Coast')
  form.Otago && tempArray.push('&exclude=Otago')
  form.Southland && tempArray.push('&exclude=Southland')
  form.available && tempArray.push('&available=2')
  x = tempArray.join('')
  return x
}
