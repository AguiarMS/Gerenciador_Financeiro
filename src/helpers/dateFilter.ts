import { Item } from '../types/item'


export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()} - ${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: String): Item[] => {
   let newList: Item[] = []
   let [year, month] = date.split('-')

   for(let i in list){
      if(
        list[i].date.getFullYear() === parseInt(year) &&
        (list[i].date.getMonth() +1) === parseInt(month)
      ){
        newList.push(list[i])
      }
   }

   return newList
}

// Função para formatar a data
export const formatDate = (date: Date): String => {
  let year = date.getFullYear()
  let month = date.getMonth() +1
  let day = date.getDate()

  return `${addZeroToDate(day)}/${month}/${year}`
}

// Função simplificada
const addZeroToDate = (n: Number): String => n < 10 ? `0${n}` : `${n}`


export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro']

  console.log(months)
  return `${months[parseInt(month) - 2]} de ${year}`;

}