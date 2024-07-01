#Password Generator App

This React application generates a random password based on user-selected criteria. The app allows users to specify the length of the password and whether to include numbers and special characters. Users can then copy the generated password to their clipboard with a single click.

Features
Dynamic Password Length: Users can adjust the length of the password using a range slider. The length can be set between 6 and 100 characters.

Include Numbers: An optional checkbox allows users to include numbers in the generated password.

Include Special Characters: An optional checkbox allows users to include special characters in the generated password.

Copy to Clipboard: Users can copy the generated password to their clipboard with a single button click.

Technologies Used
React: The core framework used to build the application.

useState Hook: Manages state for password length, inclusion of numbers, inclusion of special characters, and the generated password.

useCallback Hook: Memoizes the password generation and clipboard copy functions to optimize performance.

useEffect Hook: Triggers password regeneration whenever the length, number inclusion, or special character inclusion settings change.

useRef Hook: References the password input field for clipboard copying.
