const {observable, computed, autorun} = mobx;
const {$c_html, $c_style, $i_disabled, $i_onclick} = $$dom;

const seconds = observable.box(0);
const minutes = computed(() => Math.round(seconds.get() / 60));
const hours = computed(() => Math.round(minutes.get() / 60));
const textColor = observable.box('black');
const tooManySeconds = computed(() => seconds.get() >= 10000);

autorun(() => textColor.set(seconds.get() >= 0 ? 'black' : 'green'));

$c_html("seconds", seconds);
$c_html("minutes", minutes);
$c_html("hours", hours);

$c_style("seconds", 'color', textColor);

$i_disabled("increment", tooManySeconds);

$i_onclick("increment", seconds, val => val + 1000);
$i_onclick("decrement", seconds, val => val - 1000);
$i_onclick("clear", seconds, val => 0);

