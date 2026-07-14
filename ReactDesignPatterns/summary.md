Q : What is React ?
---------------------

A : React is a **Declarative, Components-Based JavaScript library** for building user interfaces.

Q : Declarative vs Imperative ?
-------------------------------

A : In **Declarative** programming, you describe **WHAT** you want but do not specify **HOW** to get it done.

In **Imperative** programming, you describe **WHAT** you want by specifying all the **INSTRUCTIONS** on **HOW** to do it.

Q : Components ?
----------------

A : Components are independent, reusable building blocks of code that define how a specific piece of the user interface (UI) looks and behaves


Design Patterns
---------------

1. Container-Presenter Pattern
2. Controlled vs Uncontrolled components pattern
3. Compound Components Pattern
4. Render Props Pattern
5. Higher-Order Components(HOC)
6. Custom Hooks Patterns
7. Provider Pattern(Context API)
8. State Reducer Pattern
9. Observer / Pub-Sub Pattern
10. Performance Patterns
11. Slot Pattern
12. Hooks Factory/ Strategy Pattern
13. Facade Pattern
14. Error Boundary Pattern
15. Suspense Pattern


1. Container - Presenter Pattern or Smart-Dumb Components Pattern
-----------------------------------------------------------------------

- The Container-Presenter Pattern (or Container-Presentation Pattern) is a design pattern used in front-end application development, particularly in frameworks like React. It helps separate application logic from rendering logic, making the code more modular, easier to test, and reusable.

**Pattern Structure**

  Container Component

  Responsible for managing the application’s state and logic.
  Communicates with APIs, handles data, and passes this data to the presentation component.
  Not concerned with visual rendering.

  Presenter Component

  Focused solely on rendering data and the user interface.
  Receives data via props from the container component.
  Does not manage state or complex logic.

**Advantages**

- Reusability: The presentation component can be reused in different parts of the application with different data.

- Testability: Application logic is isolated in the container component, making it easier to create unit tests.

- Maintenance: Facilitates code maintenance by clearly separating responsibilities.

**Example**

  Let’s create a simple example where the container handles the logic of fetching data from an API, and the presenter is responsible for rendering the data.

**Conclusion**

  The Container-Presenter Pattern is an excellent approach to separating concerns and keeping the code organized in React applications. With this pattern, the code becomes easier to maintain, test, and reuse, providing a better experience for both developers and users.