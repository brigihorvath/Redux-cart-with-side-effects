import { uiActions } from './ui';
import { cartActions } from './cart-redux';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-meal-order-6c9ca-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );
      if (!response.ok) {
        throw new Error('Cart is not fetched');
      }
      const cartData = await response.json();
      return cartData;
    };

    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Something went wrong',
          message: error.message,
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending data...',
        message: 'Currently sending data',
      })
    );

    const uploadData = async () => {
      const response = await fetch(
        'https://react-meal-order-6c9ca-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error('Data is not sent!');
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Data is sent',
          message: 'Data successfully sent',
        })
      );
    };

    try {
      await uploadData();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Something went wrong',
          message: error.message,
        })
      );
    }
  };
};
