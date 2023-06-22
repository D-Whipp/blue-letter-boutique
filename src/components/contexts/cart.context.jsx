import { createContext, useState, useEffect } from 'react';

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

const removeCartItem = (cartItems, productToRemove) => {
    // find out if cartItems contains a productToRemove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    // check if the quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== productToRemove.id
        );
    }

    // if found, decrement quanitity by 1
    if (existingCartItem) {
        // if found, return a NEW array of cartItem
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id
                ? // is this new item the same one we want to remove? if yes
                  // then return a new array that has the old items but
                  // decreases the quanitity of the selected item by one
                  { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }

    // return new array with modified cartItems/new cart items
    return [...cartItems, { ...productToRemove, quantity: 1 }];
};

const clearCartItem = (cartItems, productToClear) => {
    // if the cart item is already there, filter it out completely
    return cartItems.filter(
        (cartItem) => cartItem.id !== productToClear.id
    );
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) =>
                total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

