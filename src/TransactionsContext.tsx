import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './service/api';


interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createAt: string
}

interface TransactionsProviderProps{
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}