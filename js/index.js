const {observable, computed} = mobx;

const $seconds = document.getElementsByClassName('seconds')[0];
const $minutes = document.getElementsByClassName('minutes')[0];
const $hours = document.getElementsByClassName('hours')[0];
const $inc = document.getElementById('increment');
const $dec = document.getElementById('decrement');
const $clear = document.getElementById('clear');

const seconds = observable.box(0);
const minutes = computed(() => Math.round(seconds.get() / 60));
const hours = computed(() => Math.round(minutes.get() / 60));
const textColor = observable.box('black');
const tooManySeconds = computed(() => seconds.get() >= 10000);

autorun(() => textColor.set(seconds.get() >= 0 ? 'black' : 'green'));

$$html($seconds, seconds);
$$html($minutes, minutes);
$$html($hours, hours);

$$style($seconds, 'color', textColor);

$$disabled($inc, tooManySeconds);

$$onclick($inc, seconds, val => val + 1000);
$$onclick($dec, seconds, val => val - 1000);
$$onclick($clear, seconds, val => 0);

