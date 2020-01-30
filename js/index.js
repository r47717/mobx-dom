const {observable, autorun, computed} = mobx;

const $seconds = document.getElementsByClassName('seconds')[0];
const $minutes = document.getElementsByClassName('minutes')[0];
const $hours = document.getElementsByClassName('hours')[0];
const $inc = document.getElementById('increment');
const $dec = document.getElementById('decrement');
const $clear = document.getElementById('clear');

let seconds = observable.box(0);
let minutes = computed(() => Math.round(seconds.get() / 60));
let hours = computed(() => Math.round(minutes.get() / 60));

autorun(() => $seconds.innerHTML = seconds.get());
autorun(() => $minutes.innerHTML = minutes.get());
autorun(() => $hours.innerHTML = hours.get());

$inc.addEventListener('click', () => seconds.set(seconds.get() + 1000));
$dec.addEventListener('click', () => seconds.set(seconds.get() - 1000));
$clear.addEventListener('click', () => seconds.set(0));
