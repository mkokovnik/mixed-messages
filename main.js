// Shranjevanje knock knock stavkov v delih
// Stavek mora biti sestavljen iz besedila v kosih
// knock knock? Who is there? + odgovor ime + $ime who + šala
const vprasanje = "Knock knock!? Who is there? "
const imena = ["Nobel", "Tank", "Luke", "Figs", "Annie", "Cow says",
"Hal", "Alice", "Says", "Honey bee", "A little old lady", "Euripides",
"Snow", "Hawaii", "Woo", "Banana", "Orange", "Who", "Anita", "Water", "Leaf", "Annie", "Nana", "Needle",
"Canoe", "Iran", "Amos", "Some", "Dozen", "Dwayne", "Thermos"]
const sala = ["Nobel…that`s why I knocked!", "You`re welcome.", "Luke through the peep hole and find out.",
"Figs the doorbell, it`s not working!", "Annie thing you can do, I can do too!",
"No, a cow says mooooo!", "Hal will you know if you don`t open the door?", "Alice fair in love and war.",
"Says me!", "Honey bee a dear and get that for me please!", "Hey, you can yodel!",
"Euripides clothes, you pay for them!", "Snow use. The joke is over.", "I`m good. Hawaii you?",
"Glad you`re excited, too!", "Orange you glad I didn`t say banana?", "Orange you going to let me in?",
"I didn`t know you were an owl!", "Let me in! Anita borrow something.", "Water you doing telling jokes right now? Don`t you have things to do", 
"Leaf me alone!", "Annie way you can let me in?", "Nana your business!", "Needle little help right now!", 
"Canoe come out now?", "Iran here. I`m tired!", "A mosquito. Look, right there!", "Maybe some day you’ll recognize me!",
"Dozen anyone want to let me in?", "Dwayne the sink. I need to use it!", "Thermos be a better way to get to you."]

// Helper functions
const randIndex = (length) => Math.floor(Math.random() * length);

const genJoke = () => {
    const ime = imena[randIndex(imena.length)];
    const izbrSala = sala[randIndex(sala.length)];
    return vprasanje + ime + ". " + ime + " who? " + izbrSala
}

genJoke();