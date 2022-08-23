import {createContext, useContext, useState, useEffect, ReactNode} from 'react';

const TransactionContext = createContext({});

const TransactionProvider: React.FC<{children: ReactNode}> = ({children}) => {


    return (
        <TransactionContext.Provider value={{}}>
            {children}
        </TransactionContext.Provider>
    )
}

export const useTransactionContext = () => {
    const context = useContext(TransactionContext);

    return context;
}

export default TransactionProvider;