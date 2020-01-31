const {observable, computed, autorun} = mobx;
const {$c_html, $c_style, $i_disabled, $i_onclick, $i_input} = $$dom;

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

const observableMessage = $i_input('message');
$c_html('reversed-message', observableMessage, msg => msg ? msg.split('').reverse().join('') : "");
$c_html('letter-count', observableMessage, msg => msg ? msg.length : 0);
$c_style('letter-count', 'font-size', observableMessage, msg => msg ? msg.length + 15 + "px" : "0");

