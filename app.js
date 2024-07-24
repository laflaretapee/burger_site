let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

function toggleItem(btn, itemId, price) {
  let itemIndex = items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) {
    // Добавление товара в корзину
    items.push({ id: itemId, price: price });
    btn.classList.add('added-to-cart');
    btn.innerText = "Удалить из корзины";
  } else {
    // Удаление товара из корзины
    items.splice(itemIndex, 1);
    btn.classList.remove('added-to-cart');
    btn.innerText = "Добавить в корзину";
  }

  // Обновление общей стоимости и состояния главной кнопки
  let totalPrice = items.reduce((total, item) => total + item.price, 0);
  if (totalPrice > 0) {
    tg.MainButton.setText(`Общая цена товара: ${totalPrice}`);
    if (!tg.MainButton.isVisible) {
      tg.MainButton.show();
    }
  } else {
    tg.MainButton.hide();
  }
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  let data = {
    items: items,
    totalPrice: calculateTotalPrice()
  };
  tg.sendData(JSON.stringify(data));
});

function calculateTotalPrice(){
  return items.reduce((total, item) => total + item.price, 0);
}

document .getElementById("btn1").addEventListener("click", function(){
  toggleItem (this, "item1", 130);
});

document .getElementById("btn2").addEventListener("click", function(){
  toggleItem (this, "item2", 130);
});

document .getElementById("btn3").addEventListener("click", function(){
  toggleItem (this, "item3", 100);
});

document .getElementById("btn4").addEventListener("click", function(){
  toggleItem (this, "item4", 90);
});

document .getElementById("btn5").addEventListener("click", function(){
  toggleItem (this, "item5", 150);
});

document .getElementById("btn6").addEventListener("click", function(){
  toggleItem (this, "item6", 170);
});
