export const increment = (number: any) => {
    return{
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = (number: any) => {
    return{
        type: 'DECREMENT',
        payload: number
    }
}