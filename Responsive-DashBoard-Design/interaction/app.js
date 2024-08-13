import {order} from './order.js'

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', function() {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

order.forEach(function(items) {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${items.productName}</td>
        <td>${items.productNumber}</td>
        <td>${items.paymentStatus}</td>
        <td class="${items.status === 'Decline' ? 'danger' : items.status === 'pending' ? 'warning'
        : 'primary'}">${items.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});