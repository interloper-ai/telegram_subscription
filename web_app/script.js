// script.js
function subscribe(plan) {
    const paymentUrl = plan === 'monthly' ? 'https://payment-processor.com/subscribe/monthly' : 'https://payment-processor.com/subscribe/yearly';
    window.location.href = paymentUrl; // Здесь вы должны указать реальный URL для оплаты
}