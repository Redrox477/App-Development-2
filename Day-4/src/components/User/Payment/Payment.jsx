import React from 'react';
import './Payment.css'; // Import the CSS file

const Payment = () => {
  const handlePaymentClick = () => {
    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['VISA', 'MASTERCARD']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        }
      ],
      merchantInfo: {
        merchantName: 'Example Merchant'
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '100.00',
        currencyCode: 'USD'
      }
    };

    const paymentRequestObj = new google.payments.api.PaymentDataRequest(paymentRequest);
    paymentRequestObj.show().then(paymentResponse => {
      console.log(paymentResponse);
      // Handle the payment response
    }).catch(error => {
      console.error(error);
      // Handle errors
    });
  };

  return (
    <button className="google-payment-button" onClick={handlePaymentClick}>
      Pay with Google Pay
    </button>
  );
};

export default Payment;
