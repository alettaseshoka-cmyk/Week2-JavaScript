// Week 2 - Regular Expressions Practice

// 1. Basic match
const str = "Hello World 123";
console.log(str.match(/Hello/));

// 2. Character Classes
console.log("abc123".match(/\d/g));
console.log("abc123".match(/\w/g));
console.log("abc 123".match(/\s/g));

// 3. Custom Character Class
console.log("abc123_".match(/[a-zA-Z]/g));

// 4. Quantifiers
console.log("aaa".match(/a+/));
console.log("a".match(/a?/));
console.log("aaaa".match(/a{2,3}/));

// 5. Groups
const fullName = "John Smith";
console.log(fullName.replace(/(\w+) (\w+)/, "$2 $1"));

// 6. Named Group
const date = "2026-11-12";
console.log(date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/));

// 7. Lookahead
console.log("password123".match(/\w+(?=\d)/));

// 8. Lookbehind
console.log("price: $100".match(/(?<=price: )\$\d+/));

// 9. Test email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("lerato@gmail.com"));
