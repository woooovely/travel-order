import { createContext, useEffect, useMemo, useState } from "react";

interface priceType {
    [orderType: string]: number
}

interface stateType {
    [orderType: string]: any
}


export const OrderContext = createContext([]);

export function OrderContextProvider(props: any) {
    const [orderCounts, setOrderCounts] = useState<stateType>({
        products: new Map(),
        options: new Map()
    })

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0
    })

    const priceItem: priceType = {
        products: 1500000,
        options: 200000
    }

    const calculateSubtotal = (orderType: any, orderCounts: any) => {
        let optionCount = 0;
        for (const count of orderCounts[orderType].values()) {
            optionCount += count;
        }
        return optionCount * priceItem[orderType]
    }

    useEffect(() => {
        const productsTotal = calculateSubtotal('products', orderCounts);
        const optionsTotal = calculateSubtotal('options', orderCounts);
        const total = productsTotal + optionsTotal
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total
        })
    }, [orderCounts])

    const value = useMemo(() => {
        function updateItemCount(itemName: string, newItemCount: any, orderType: any) {
            const newOrderCounts = {...orderCounts}

            const orderCountsMap = orderCounts[orderType]
            orderCountsMap.set(itemName, parseInt(newItemCount));

            setOrderCounts(newOrderCounts);
        }
        return [{ ...orderCounts, totals }, updateItemCount]
    }, [orderCounts, totals])

    return <OrderContext.Provider value={value} {...props} />
}