# CodePauser

CodePauser is an npm package that allows you to pause the execution of your code for a certain amount of time. It provides a simple function, `pause`, which can be used to introduce delays in your code.

## Installation

You can install CodePauser via npm using the following command:

```bash
npm install codepauser
```

## Usage

To use CodePauser in your project, follow these steps:

1. Import the `pause` function into your file:

```js
import { pause } from 'codepauser';
```

2. Use the `pause` function to introduce a delay in your code:

```js
console.log('Hello!'); // Executes instantly.
pause(3000); // Will pause execution for 3 seconds.
console.log('Goodbye!'); // Executes after 3 seconds.
```

The above example will log "Hello!" immediately, then pause for 3 seconds, and finally log "Goodbye!" after the pause.

## API Reference

### `pause(milliseconds: number)`

This function takes a single argument:

- `milliseconds` (number): The amount of time to pause the code execution, in milliseconds.

The `pause` function is synchronous and will block the execution of code for the specified duration.

## Examples

Here are a few examples of using CodePauser:

```js
// Pausing for 1 second
pause(1000);

// Pausing for 500 milliseconds
pause(500);

// Pausing for 2.5 seconds
pause(2500);
```

## Contributing

If you would like to contribute to CodePauser, feel free to submit issues and pull requests on the [GitHub repository](https://github.com/notcharliee/codepauser).

## License

CodePauser is licensed under the ISC License. See the [LICENSE](https://github.com/notcharliee/codepauser/blob/main/LICENSE) file for more details.

## Author

CodePauser is authored by [notcharliee](https://github.com/notcharliee) on GitHub.

---

Thank you for using CodePauser! If you have any questions or need further assistance, feel free to reach out to me. Happy coding!