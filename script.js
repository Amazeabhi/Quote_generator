const quotes = [
  { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { quote: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
  { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { quote: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { quote: "Programming isn’t about what you know; it’s about what you can figure out.", author: "Chris Pine" },
  { quote: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.", author: "Dan Salomon" },
  { quote: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan" },
  { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { quote: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { quote: "Deleted code is debugged code.", author: "Jeff Sickel" },
  { quote: "You might not think that programmers are artists, but programming is an extremely creative profession.", author: "John Romero" },
  { quote: "Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn’t work.'", author: "Unknown" },
  { quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.", author: "Louis Srygley" },
  { quote: "It’s not a bug – it’s an undocumented feature.", author: "Anonymous" },
  { quote: "One man’s crappy software is another man’s full-time job.", author: "Jessica Gaston" },
  { quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.", author: "Anonymous" },
  { quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra" },
  { quote: "Programming is the art of algorithm design and the craft of debugging errant code.", author: "Ellen Ullman" },
  { quote: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
  { quote: "Good code is its own best documentation.", author: "Steve McConnell" },
  { quote: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", author: "Seymour Cray" },
  { quote: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
  { quote: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", author: "Martin Fowler" },
  { quote: "Learning to write programs stretches your mind and helps you think better.", author: "Bill Gates" },
  { quote: "To iterate is human, to recurse divine.", author: "L. Peter Deutsch" },
  { quote: "Programming is like writing a book... except when you miss a single comma on page 126 the whole thing makes no sense.", author: "Unknown" },
  { quote: "Don’t comment bad code—rewrite it.", author: "Brian Kernighan" },
  { quote: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
  { quote: "It’s not the language that makes programs appear simple. It’s the programmer that make the language appear simple!", author: "Robert C. Martin" },
  { quote: "The most disastrous thing you can ever learn is your first programming language.", author: "Alan Kay" },
  { quote: "Computers are good at following instructions, but not at reading your mind.", author: "Donald Knuth" },
  { quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
  { quote: "You can’t have great software without a great team.", author: "Joel Spolsky" },
  { quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.", author: "Mosher’s Law of Software Engineering" },
  { quote: "Beware of bugs in the above code; I have only proved it correct, not tried it.", author: "Donald Knuth" },
  { quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
  { quote: "A language that doesn’t affect the way you think about programming is not worth knowing.", author: "Alan Perlis" },
  { quote: "Programming is not about typing, it's about thinking.", author: "Rich Hickey" },
  { quote: "Simple things should be simple, complex things should be possible.", author: "Alan Kay" },
  { quote: "Fast. Cheap. Reliable. Pick two.", author: "Software Engineering Proverb" },
  { quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", author: "Patrick McKenzie" },
  { quote: "Any sufficiently advanced bug is indistinguishable from a feature.", author: "Rich Kulawiec" }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex].quote;
  const quoteAuthor = quotes[randomIndex].author;

  document.getElementById("quote").textContent = `"${quoteText}"`;
  document.getElementById("author").textContent = `- ${quoteAuthor}`;
}
