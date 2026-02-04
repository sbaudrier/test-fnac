type DiscountType = 1 | 2 | 3 | 4;

export const calculateDiscount = (
    amount: number,
    type: DiscountType,
    years: number
): number => {

    const fidelityDiscount = years > 5 ? 0.05 : years / 100;

    const discountPercentages = [0, 10, 30, 50];
    const percentage = discountPercentages[type - 1] ?? 0;

    const discountedPrice = amount - amount * (percentage / 100);

    return discountedPrice * (1 - fidelityDiscount);
};
