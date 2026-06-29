# What is Javascript

* JavaScript is a synchronous, single‑threaded scripting language used to build dynamic and interactive web content. It enables developers to manipulate the DOM, handle user events, and communicate with servers.

# How JavaScript Executes: From Source Code to the Event Loop

## 1. The Compilation Phase (JIT Compilation)
Before your code can be parsed into an Execution Context, the JavaScript engine has to translate your human-readable code into something the machine understands. Modern engines do this using a **Just-In-Time (JIT) Compiler**.

* **Parsing:** The engine reads your source code and breaks it down into tokens. It then turns these tokens into a tree structure called an **Abstract Syntax Tree (AST)**.
* **Compilation:** Instead of reading and interpreting the AST line-by-line (which is slow), the engine's compiler takes the AST and compiles it directly into machine code (bytecode) just seconds before it runs.
* **Optimization:** While the code is running, an optimizing compiler watches for "hot code" (code that runs repeatedly) and re-compiles it on the fly to make it run even faster.

---

## 2. The Execution Context (The Sandbox)
Once the code is compiled into bytecode, the engine creates an environment called the **Execution Context**. Think of it as a sandbox where your code is evaluated and executed. 

This happens in two distinct phases:

### Phase 1: The Memory Creation Phase
Before a single line of code actually runs, JavaScript scans the compiled file. It sets aside memory space for all your variables and functions.
* **Variables (`var`):** Allocated memory and given a placeholder value of `undefined`.
* **Variables (`let` & `const`):** Also allocated memory, but they remain uninitialized. They sit in a **Temporal Dead Zone (TDZ)** and cannot be accessed until they are assigned a value.
* **Functions:** The entire function body is copied directly into memory. This is why you can call a function before it's defined in your code (a concept known as **hoisting**).

### Phase 2: The Code Execution Phase
The engine goes through your code line-by-line. This time, it actually executes the commands:
* It assigns real values to your variables.
* It skips over function definitions (since they were handled in Phase 1) and only jumps into them when a function is **invoked** (called).

---

## 3. The Call Stack (Keeping Track)
To manage *where* it is in the code during the execution phase, JavaScript uses a data structure called the **Call Stack**. It operates on a "Last In, First Out" (LIFO) principle—like a stack of plates.

* **Global Execution Context (GEC):** When your script starts, the global context is created and pushed to the bottom of the stack.
* **Function Invocation:** Every time you call a function, a brand new *Function Execution Context* is created and pushed to the top of the stack.
* **Function Completion:** When a function finishes running (hits a `return` or the end of the block), it is popped off the top of the stack, and control returns to the function right below it.

---

## 4. Asynchronous Code & The Event Loop
If JavaScript is single-threaded (one Call Stack, one thing at a time), how does it handle things like fetching data from an API or waiting for a 2-second timer without freezing the entire browser? 

It gets help from the browser environment (or Node.js runtime) using three external components: **Web APIs**, the **Callback Queue**, and the **Event Loop**.

Here is how an asynchronous operation (like `setTimeout` or `fetch`) is handled:

1.  **The Call Stack:** The async function hits the Call Stack.
2.  **Web API:** The JS engine hands the heavy lifting over to the browser's Web APIs (which handle timers, network requests, or DOM events) and immediately pops the function off the Call Stack to keep running the rest of your synchronous code.
3.  **Callback Queue:** Once the Web API finishes its job (e.g., the 2-second timer ends or the data fetches), it pushes the callback function into the **Callback/Task Queue**.
4.  **The Event Loop:** This acts as a continuous monitor. It looks at the Call Stack. **If and only if the Call Stack is completely empty**, the Event Loop grabs the first function from the Callback Queue and pushes it onto the Call Stack to finally be executed.

