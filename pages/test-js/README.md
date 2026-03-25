# Practices


واضحات
متغیر (مثلا با let) یکبار تعریف میشه توی موارد بعدی که مقداری رو می ریزیم توش دیگه از let استفاده نمی کنیم.
مثلا این درسته:
```js
let score = 5;

if (score == 1){
    score = "⭐";
} else {
    score = "none";
}
```

اما این اشتباهه:
```js
let score = 5;

if (score == 1){
    let score = "⭐";
} else {
    let score = "none";
}
```

## عملگرها
|| OR
&& AND
! NOT  !=   !==   !===