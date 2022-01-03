import * as C from './App.styles'
import { useState, useEffect } from 'react'
import { Category } from './types/categories'
import { Item } from './types/item'
import { categories } from './data/categories'
import { items } from './data/items'
import { TableArea } from './components/TableArea'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { Container } from './components/InfoArea/styles'
import { InfoArea } from './components/InfoArea'



const App = () => {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>

        {/* Area de Informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        {/* Area de Inserir informações */}


        {/* Tabela de items */}
        <TableArea list={list} />


      </C.Body>

    </C.Container>
  )
}

export default App