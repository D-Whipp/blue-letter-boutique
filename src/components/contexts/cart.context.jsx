import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    // find out if cartItems contains a productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // if found, increment quanitity by 1
    if (existingCartItem) {
        // if found, return a NEW array of cartItem
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? // is this new item the same one we want to add? if yes
                  // then return a new array that has the old items but
                  // increase the quanitity of the selected item by one
                  { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // return new array with modified cartItems/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
