export default function stringMaker (form) {
  const tempArray = ['?']
  let x = 0
  form.north ? tempArray.push('&island=north') : x++
  form.south ? tempArray.push('&island=south') : x++
  form.Northland ? tempArray.push('&exclude=Northland') : x++
  form.Auckland ? tempArray.push('&exclude=Auckland') : x++
  form['Bay of Plenty'] ? tempArray.push('&exclude=Bay of Plenty') : x++
  form.Waikato ? tempArray.push('&exclude=Waikato') : x++
  form.Gisborne ? tempArray.push('&exclude=Gisborne') : x++
  form.Taranaki ? tempArray.push('&exclude=Taranaki') : x++
  form['Hawkes Bay'] ? tempArray.push('&exclude=Hawkes Bay') : x++
  form['Whanganui - Manawatu'] ? tempArray.push('&exclude=Whanganui - Manawatu') : x++
  form.Wellington ? tempArray.push('&exclude=Wellington') : x++
  form.Nelson ? tempArray.push('&exclude=Nelson') : x++
  form.Marlborough ? tempArray.push('&exclude=Marlborough') : x++
  form.Canterbury ? tempArray.push('&exclude=Canterbury') : x++
  form['West Coast'] ? tempArray.push('&exclude=West Coast') : x++
  form.Otago ? tempArray.push('&exclude=Otago') : x++
  form.Southland ? tempArray.push('&exclude=Southland') : x++
  x = tempArray.join('')
  return x
}
